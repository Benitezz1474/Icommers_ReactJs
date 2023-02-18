import { useContext, useLayoutEffect, useRef, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom"
import {firebaseGame} from "../../Firebase/firebaseGames"

//Components
import { SpinnerGames } from "./SpinnerGames";
import { FullPicture,ContactForm} from "./index";


//CSS
import 'animate.css';
import "../../STYLES/FullGame.css"
import {ComentBox} from "../../Layout/ComentsBox"



export const FullGame=()=>{
  
  const [pic, setPic] = useState(false)
  const params = useParams();
  
  const {games,load} = firebaseGame()

  if(load){

  // ---------------->
  
  //esta funcion cambia el estado de pic por el nombre de una imagen que viene de games.pictures.pic1 o pic2
  //ya que cuando es false se renderiza por defecto (en <div className = "view", el cual esta mas abajo) pic1

  const pictureRender=(picture)=>{
  
      setPic(picture)
  
  }
  
  

  


    
    const fullDataGame = games.find(game => game.id == params.id);
    
    const {name,description,image,gender,price,pictures} = fullDataGame;
    
    const {pic1, pic2, pic3} = pictures
    
    
    return <>
    <div className="fullGame">
        <div>
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


    <div className="bluRay" onClick={()=>pictureRender(pic1)} >

    <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-b3bcc.appspot.com/o/assets%2FfullGame%2F${pic1}.png?alt=media&token=88a36573-a021-4e10-bcfb-c44bc28faab9`} alt="" />
    
    </div>
    
    <div onClick={()=>pictureRender(pic2)}>
      <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-b3bcc.appspot.com/o/assets%2FfullGame%2F${pic2}.png?alt=media&token=88a36573-a021-4e10-bcfb-c44bc28faab9`} alt="" />
    </div>

  </div>
  
  <div className="view">
    
    {
    
     pic // cuando es false renderiza la primera imagen  (pic1), propiedad de pictures que viene de games
         // y cuando es true renderiza la imagen que corresponde (se activa la funcion pictureRender y resive como argumento la imagen que corresponde)
       ?
       <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-b3bcc.appspot.com/o/assets%2FfullGame%2F${pic}.png?alt=media&token=88a36573-a021-4e10-bcfb-c44bc28faab9`} alt="" />
       :  
       <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-b3bcc.appspot.com/o/assets%2FfullGame%2F${pic1}.png?alt=media&token=88a36573-a021-4e10-bcfb-c44bc28faab9`} alt="" />

    }
    
  </div>

 </div>

 
 <ContactForm />


 <ComentBox>


 </ComentBox>

    </>

}


else return <SpinnerGames />


}




