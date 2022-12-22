import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import User from "./User.jsx";
import Button from "./ui/Button.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";
import CartStatus from "./CartStatus.jsx";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 p-4">
      <Link
        to="/"
        className="flex items-center text-4xl text-brand gap-2 mr-10"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="shrink-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="text-brand"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12,11 L22.1551134,17.4623449 C22.6217314,17.7592836 23,18.4433532 23,19.0093689 L23,20.9906311 C23,21.5480902 22.5605417,22 21.9975383,22 L2.00246167,22 C1.44881738,22 1,21.5566468 1,20.9906311 L1,19.0093689 C1,18.4519098 1.3786449,17.7590442 1.84488659,17.4623449 L12,11 Z M15,5 C15,3.34314575 13.6568542,2 12,2 C10.3431458,2 9,3.34314575 9,5 C9,5.93157601 9.41137234,6.80169553 10.0908534,7.31422922 C11,8 12,8 12,9.5 L12,11"
          ></path>
        </svg>
        <p className="whitespace-nowrap ">Today's Fit</p>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/cart">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <BsPencilSquare className="text-2xl" />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login} text="Login" />}
        {user && <Button onClick={logout} text="Logout" />}
      </nav>
    </header>
  );
}
