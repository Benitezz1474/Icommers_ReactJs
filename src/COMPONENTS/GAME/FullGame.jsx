import { useContext, useLayoutEffect, useRef, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom"
import {firebaseGame} from "../../Firebase/firebaseGames"

//Components
import { SpinnerGames } from "./SpinnerGames";
import { FullPicture,ContactForm} from "./index";


//CSS
import 'animate.css';
import "../../STYLES/FullGame.css"


export const FullGame=()=>{

  const params = useParams();
  
  const {games,load} = firebaseGame()
  
  const [firstImage, setFirstImage] = useState(true)
  
  const onFirsImage=()=>{
    
    if(!firstImage) return;

    setFirstImage(false);
  }
  


  if(load){
    
    const fullDataGame = games.find(game => game.id == params.id);
    
    const {name,description,image,gender,price,pictures} = fullDataGame;
    
    const {pic1, pic2, pic3} = pictures
    
    
    return <>
    <div className="fullGame">
        <div>
        {/* <img src={`/assets/gameCover/${image}.png`} alt="" className="animate__animated animate__pulse" /> */}
        <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-b3bcc.appspot.com/o/assets%2FgameCover%2F${image}.png?alt=media&token=b8cc62c2-b6a9-459a-9461-bb0415b5e25d`} alt="" />
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
    <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-b3bcc.appspot.com/o/assets%2FfullGame%2F${pic1}.png?alt=media&token=88a36573-a021-4e10-bcfb-c44bc28faab9`} alt="" />
    </Link>
    </div>
    
    <div>
    <Link to = {pic2}>
      <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-b3bcc.appspot.com/o/assets%2FfullGame%2F${pic2}.png?alt=media&token=88a36573-a021-4e10-bcfb-c44bc28faab9`} alt="" />
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

    {/* Esta porcion de codigo se encarga de poner una imagen SOLAMENTE la primera vez que se renderiza el componente */}
    {
      firstImage && <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-b3bcc.appspot.com/o/assets%2FfullGame%2F${pic1}.png?alt=media&token=88a36573-a021-4e10-bcfb-c44bc28faab9`} alt="" />

    }
  </div>

 </div>

 
 <ContactForm />

    </>

}


else return <SpinnerGames />


}

