import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profile from "../../assets/nav/user.png";
import cart from "../../assets/nav/online-shopping.png"

export const Navbar = () => {
    return <nav className="navbar">
        <Link className="title" to="/" >
            MAGIC PETS
        </Link>
        <div className="menu">
            <ul
                className="menuItems"
            >
                <li>
                    <img className="image" src={profile} onClick={() => { }}
                    />
                </li>
                <li>
                    <img className="image" src={cart} onClick={() => { }}
                    />
                </li>
            </ul>
        </div>
    </nav>
}