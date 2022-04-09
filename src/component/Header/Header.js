import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user } = useFirebase();
  return (
    <div className="navbar">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/registration"}>Registration</Link>
        {user.uid ? user.displayName : <Link to={"/login"}>Login</Link>}
      </nav>
    </div>
  );
};

export default Header;
