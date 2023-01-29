//React
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

//Components
import { GameCover,} from "./index";
import {games} from "../../DATA/games.js"
//Styles
import "../../STYLES/Games.css";
import { createContext, useContext, useState } from "react";
import { dataContext } from "../../HOOKS/gameContext";
import { useForm } from "../../HOOKS/useForm";
import { GameSearch } from "./GameSearch";




export const Games=()=>{
    const {handleForm,handleInputChange,searchView,setSearchView} = useForm()
    return <>

  <FormNavBar>
           <InputFormNavBar type="text" placeholder="Search" onChange={handleInputChange} />
           <input type="submit" value="Search" className="btn btn-primary" onClick={handleForm} />
           
        </FormNavBar>

          <GameSearch view = {searchView} chageView = {setSearchView} />

        <section>
        {
            games.map(game => {
                return <GameCover data = {game} key = {game.id} />
            })
        }
        </section>

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