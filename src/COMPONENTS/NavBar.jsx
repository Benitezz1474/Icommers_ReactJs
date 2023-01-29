//React
import { useEffect } from "react";
import { useContext, useLayoutEffect, useState } from "react";
import { Form, Link, NavLink } from "react-router-dom"
import { authContext } from "../CONTEXT";
import {LogoutConfirm} from "./index"

//Components
import { useForm } from "../HOOKS/useForm";

//Styles
import "../STYLES/NavBar.css";

export const NavBar=()=>{


const [logoutConfirm, setLogoutConfirm] = useState(false);


    return  <>
    
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid" style={{flexWrap:"nowrap"}}>
    <Link className="navbar-brand" to = "#">My Library PS4</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to = "/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/games">Games</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/store">Store</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to = "#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More Settings
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to = "/userConfig">User Config</Link></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              {/* <li onClick={()=>setLogoutConfirm(true)} > SigOut </li> */}
              <button className="btn btn-danger mx-2" onClick={()=>{ setLogoutConfirm(true) }} >SigOut</button>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>





{/* Logout Alert Confirm */}

    {
      logoutConfirm && <LogoutConfirm confirm = {logoutConfirm} setLogoutConfirm = {setLogoutConfirm} />
    }

    </>
    
      
    
}


