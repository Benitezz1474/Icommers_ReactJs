//React
import { Route, Routes } from "react-router-dom";

//Components
import { GameCover,} from "./index";
import {games} from "../../DATA/games.js"
//Styles
import "../../STYLES/Games.css";
import { createContext, useContext, useState } from "react";
import { dataContext } from "../../HOOKS/gameContext";




export const Games=()=>{
    return <>


        <section>
        {
            games.map(game => {
                return <GameCover data = {game} key = {game.id} />
            })
        }
        </section>

        </>
        

}