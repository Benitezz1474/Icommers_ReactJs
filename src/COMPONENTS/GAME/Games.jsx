//React

//Styles
import styled from "styled-components";
import "../../STYLES/Games.css";

//Components
import { GameCover,} from "./index";
import { useForm } from "../../HOOKS/useForm";
import { GameSearch } from "./GameSearch";
import { firebaseGame } from "../../Firebase/firebaseGames";
import { SpinnerGames } from "./SpinnerGames";



export const Games=()=>{
    const {handleForm,handleInputChange,searchView,setSearchView} = useForm()

    //FirebaseGame
    const {games,load} = firebaseGame()


    //if loasd == true, so return everithing 

 if(load)  return <>

  <FormNavBar>
           <InputFormNavBar type="text" placeholder="Search" onChange={handleInputChange} />
           <input type="submit" value="Search" className="btn btn-primary" onClick={handleForm} />
           
        </FormNavBar>

          <GameSearch view = {searchView} chageView = {setSearchView} game = {games} />


        {/* Games! */}
        <section>
        {
            games.map(game => {
                return <GameCover data = {game} key = {game.id} />
            })
        }
        </section>

        </>

//if load !== true so return Snipper for to show loading message

else return <SpinnerGames text="Loading..." />

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