import { Link } from "react-router-dom";
import {firebaseGetImgs} from "../../Firebase/firebaseGetImgs"
import 'animate.css';
import { useEffect } from "react";

export const GameCover=({data})=>{
    
      


    

    return <Link to = {`/fullGame/${data.id}`} className = "animate__animated animate__bounce" >
     <div className="gameCover">
        <div>
            {/* <img src={`/assets/gameCover/${data.image}.png`} alt="" /> */}
            <img src={`https://firebasestorage.googleapis.com/v0/b/react-firebase-b3bcc.appspot.com/o/assets%2FgameCover%2F${data.image}.png?alt=media&token=b8cc62c2-b6a9-459a-9461-bb0415b5e25d`} alt="" />
        </div>
        <div>
             <h3>{data.name}</h3>
        </div>
    </div>
        </Link>
}