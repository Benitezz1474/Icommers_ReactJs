import { useContext, useLayoutEffect, useRef, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom"
import { games } from "../../DATA/games"

import "../../STYLES/FullGame.css"
import { FullPicture,ContactForm} from "./index";
import 'animate.css';
import { dataContext } from "../../HOOKS/gameContext";


export const FullGame=()=>{
  



   const [firstImage, setFirstImage] = useState(true)

   const onFirsImage=()=>{

    if(!firstImage) return;
    setFirstImage(false);
   }

    const params = useParams();

    const fullDataGame = games.find(game => game.id == params.id);

    const {id,name,description,image,gender,price,pictures} = fullDataGame;

    const {pic1, pic2, pic3} = pictures


    return <>
    <div className="fullGame">
        <div>
        <img src={`/assets/gameCover/${image}.png`} alt="" className="animate__animated animate__pulse" />
        </div>
        <div>
            <nav>
                <ul>
                    <h1>{name}</h1>
                    <li>Price: {price}</li>
                    <li> Gender: {gender}</li>
                    <li>Short: {description}</li>
                </ul>
               
            </nav>

            <main>
               <Link ><button className="btn btn-success" >TO BUY</button></Link>
               <Link to = "/games"><button className="btn btn-primary" > Back Page</button></Link>
            </main>
        </div>
    </div>


 <div className="category">
  <div className="section">
    <div className="bluRay" >
    <Link to = {pic1} >
      <img src={`/assets/fullGame/${pic1}.png`} alt="" />
    </Link>
    </div>
    
    <div>
    <Link to = {pic2}>
      <img src={`/assets/fullGame/${pic2}.png`} alt="" />
    </Link>
    </div>
    {/* <div>
      <img src={`/assets/fullGame/${pic3}`} alt="" />
    </div> */}
  </div>
  <div className="view">
    <Routes>
      <Route path=":image" element= {<FullPicture setFirstImage = {onFirsImage} />} />
    </Routes>

    {
      firstImage && <img src={`/assets/fullGame/${pic1}.png`} alt="" />

    }
  </div>

 </div>

 
 <ContactForm />

    </>

}

