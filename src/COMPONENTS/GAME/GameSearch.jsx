import { useParams, useSearchParams,useLocation} from "react-router-dom"
import styled from "styled-components"
import { games } from "../../DATA/games"
import { getGameById } from "../../DATA/getGameById"
import {GameCover} from "./index"

export const GameSearch=({changeView,view,inputValue,game})=>{
    

    const location = useLocation();

    console.log(location.pathname)

    const [params, setParams] = useSearchParams();

    const q_param = params.get("q");

    const searchGames = getGameById(q_param)


       if(view && searchGames.length > 0){
        return <>
        <div className="alert alert-success">
        <h2>Results!</h2>
        </div>
        <Show view = {view}>

           
        {

           searchGames.map(obj => {
            return <GameCover data = {obj} key = {obj.id} />
        })
        
    }
        
   </Show>
    </>
       }

       else if(searchGames.length <= 0 && view == true && location.pathname == "/games") {
        console.log("danger")
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
align-item:center;
justify-contents: space-around;
flex-wrap:wrap;

@media screen and (min-width: 700px){
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:20px
}
`