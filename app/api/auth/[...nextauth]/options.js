import GithubProvider from "next-auth/providers";
import GoogleProvider from "next-auth/providers";

export const options = {
  providers: [
    GithubProvider({
      profile(profile) {
        console.log("Profile Github : ", profile);

        let userRole = "Github User";
        if (profile?.email == "alvinmarco8@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      profile(profile) {
        console.log("Profile Google : ", profile);

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
