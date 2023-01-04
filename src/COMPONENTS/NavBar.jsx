//React
import { useState } from "react";
import { NavLink } from "react-router-dom"

//Components

//Styles
import "../STYLES/NavBar.css";

export const NavBar=()=>{

    const [navOff, setNavOff] = useState(false);

    const handleNavOff=()=>{
        setNavOff(!navOff);
    }

    return <header>
        <nav>
            <h2>LogoPro</h2>

            <ul className={navOff ? "navOff" : "navOn"} >

                <li onClick={handleNavOff}> <NavLink to = "/games" className = {({isActive})=> isActive ? "active" : "" }> Games </NavLink> </li>
                <li onClick={handleNavOff}> <NavLink to = "/store" className = {({isActive})=> isActive ? "active" : "" }> Store </NavLink> </li>
                <li onClick={handleNavOff}> <NavLink to = "/sale" className = {({isActive})=> isActive ? "active" : "" }> Sale </NavLink> </li>
            </ul>
            <button onClick={handleNavOff} className = "btn_menu" > <img src="/menu.png" alt="" /> </button>
        </nav>
    </header>
}