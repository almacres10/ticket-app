import {
  faHome,
  faSignInAlt,
  faTicket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">Welcome, Alvin</p>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/signUp/">
          <FontAwesomeIcon icon={faSignInAlt} className="icon" />
        </Link>
        <Link href="/loginPage/">
          <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
