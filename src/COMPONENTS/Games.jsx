//React
import { Route, Routes } from "react-router-dom";

//Components
import { GameCover, GameFilter } from "./index";
import {games} from "../DATA/games.js"
//Styles
import "../STYLES/Games.css";

export const Games=()=>{

    
    return<>
          <GameFilter />
     <section>
        {
            games.map(game => {
                return <GameCover data = {game} />
            })
        }
    </section>

        </>
}