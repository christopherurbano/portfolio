import React from "react";
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        


      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Projects</Link>
            <Link className="desktopMenuListItem">Skills</Link>
            <Link className="desktopMenuListItem">Testiomonials</Link>
            


        </div>
        <button className="desktopMenuBtn">
            <img src={contact} alt="" className="desktopMenuImg"/>Contact Me</button>
        


      </nav>
    );
  }

  export default Navbar;