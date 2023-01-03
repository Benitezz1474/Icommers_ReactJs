import { useRef, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom"
import { games } from "../DATA/games"

import "../STYLES/FullGame.css"
import { FullPicture } from "./FullPicture";
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

    console.log(pic1,pic2)


    return <>
    <div className="fullGame">
        <div>
        <img src={`/public/assets/gameCover/${image}.jpg`} alt="" />
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
            <Link ><button className="btn btn-success" >COMPRAR</button></Link>
            <Link to = "/games"><button className="btn btn-primary" >VOVLER</button></Link>
            </main>
        </div>
    </div>


 <div className="category">
  <div className="section">
    <div>
    <Link to = {pic1}>
      <img src={`/assets/fullGame/${pic1}.jpg`} alt="" />
    </Link>
    </div>
    
    <div>
    <Link to = {pic2}>
      <img src={`/assets/fullGame/${pic2}.jpg`} alt="" />
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
      firstImage && <img src={`/assets/fullGame/${pic1}.jpg`} alt="" />

    }
  </div>
 </div>


    </>

}

