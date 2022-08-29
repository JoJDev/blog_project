import { useState } from "react";
import logo from './../../assets/favicon-32x32.png';
import "./Header.scss"
import Nav from './../Nav/Nav'


function Header() {
    // const {headerColor, setHeaderColor} = useState(".header--colorHero");

    return(
        <header>
            <div className="header__logo">
                <img src={logo} alt="logo" />
                <h1>TechBlog</h1>
            </div>
            <Nav />
        </header>        
    );
}

export default Header;