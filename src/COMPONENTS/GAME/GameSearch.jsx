import { useParams, useSearchParams,useLocation} from "react-router-dom"
import styled from "styled-components"
import { games as gameLocation} from "../../DATA/games"
import { getGameById } from "../../DATA/getGameById"
import { firebaseGame } from "../../Firebase/firebaseGames"
import {GameCover} from "./index"

export const GameSearch=({changeView,view,inputValue,game})=>{
    


    const location = useLocation();
    
    const [params, setParams] = useSearchParams();
    
    const q_param = params.get("q");
    
    //I get result (game) with this function
    const  searchGames = getGameById(q_param, game)
    
    
    // const gameSearch = games.filter(obj => obj.name.includes(q_param)) //funciona
    

    
    //if view, so render results with map loop
    if(view){
        return <>
        <div className="alert alert-success">
        <h2>Results!</h2>
        </div>
        <Show view = {view}>

           
        {
            //map loop
            searchGames.map(obj => {
                return <GameCover data = {obj} key = {obj.id} />
            })
            
    }
        
   </Show>
    </>
       }
       
       //this component only render in this location (/games)
       else if(view == true && location.pathname == "/games") {
           return <div className="alert alert-danger" role="alert">
         Sorry, not found article with this name
      </div>
       }
       
       
    }
    
    
    const Show = styled.div`
width: 100%;
padding: ${({view})=> view ? "60px 10px" : "0px" };
background-color: rgba(50,50,50,0.5);
display:flex;
align-items:center;
justify-content: space-around;
flex-wrap:wrap;

@media screen and (min-width: 700px){
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:20px
}
`