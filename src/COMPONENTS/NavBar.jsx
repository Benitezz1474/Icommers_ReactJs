//React
import { useState } from "react";
import { Form, NavLink } from "react-router-dom"

//Components

import { useForm } from "../HOOKS/useForm";

//Styles
import "../STYLES/NavBar.css";
import styled from "styled-components";
import { GameSearch } from "./GAME/GameSearch";

export const NavBar=()=>{


    const [navOff, setNavOff] = useState(false);

    const handleNavOff=()=>{
        setNavOff(!navOff);
    }

    const {handleForm,handleInputChange,handleTextArea,searchView,inputValue,gameSearch} = useForm()

    return <>
    <header>

        <nav>
            <h2>LogoPro</h2>

            <ul className={navOff ? "navOff" : "navOn"} >

            {/* De esta forma a continuacion, cuando se le da click a los links en mobile, no tienen que volver a darle en menu. Pero causa
            
                colisionamiento o detalles no deseados en desktop device */}

            {/* <li  onClick={handleNavOff} ><NavLink to = "/games" className = {({isActive})=> isActive ? "active" : "" }> Games </NavLink> </li>  */}

                 <li ><NavLink to = "/games" className = {({isActive})=> isActive ? "active" : "" }> Games </NavLink> </li> 
                 <li ><NavLink to = "/store" className = {({isActive})=> isActive ? "active" : "" }> Store </NavLink> </li> 
                 <li ><NavLink to = "/sale" className = {({isActive})=> isActive ? "active" : "" }> Sale </NavLink> </li>
            </ul>
            <button onClick={handleNavOff} className = "btn_menu" > <img src="/menu.png" alt="" /> </button>
        </nav>
    </header>
        <FormNavBar>
           <InputFormNavBar type="text" placeholder="Search" onChange={handleInputChange} />
           <input type="submit" value="Search" className="btn btn-primary" onClick={handleForm} />
           
        </FormNavBar>

          <GameSearch view = {searchView} changeView = {handleTextArea} inputValue = {inputValue} game = {gameSearch} />
    </>
}

const FormNavBar = styled.form`

width: 100%;
border-radius:5px;
margin:20px auto;
max-width:1000px;
padding:20px;
background-color:rgba(200,200,200,0.5);
display: flex;
justify-content: space-around;
align-items: center;
`;

const InputFormNavBar = styled.input`

width: 50%;
padding:20px;
background-color:#fff;

border:none;
outline:none;
box-shadow: 5px 5px 10px 0 rgba(100,100,100,0.6);
border-radius:5px;

`

