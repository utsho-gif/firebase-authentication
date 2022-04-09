import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";


const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/registration"}>Registration</Link>
        {user?.uid ? (
          <>
            {user.displayName}
            <button onClick={() => signOut(auth)} style={{marginLeft:'10px'}}>Sign Out</button>
          </>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
