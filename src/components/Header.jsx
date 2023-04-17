import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AutContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AutContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="navbar bg-blue-600 text-white">
        <Link className="btn btn-ghost normal-case text-xl">Auth Master</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/order">
          Order
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>
        )}
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user ? (
          <div className="gap-5">
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs">
              Sing Out
            </button>
          </div>
        ) : (
          <Link to="login">Login</Link>
        )}
      </div>
    </>
  );
};

export default Header;
