import React from "react";
import Logo from "./assets/airbnb1.png";

const Nav = () => {
    return(
        <nav className="navBar">
            <img className="navLogo" src={Logo}/>
        </nav>
    );
}

export default Nav;