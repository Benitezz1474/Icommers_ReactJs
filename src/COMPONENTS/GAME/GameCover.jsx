import { Link } from "react-router-dom";
import 'animate.css';
export const GameCover=({data})=>{
    
    // const {id,name,description,gender,image} = data;

    return <Link to = {`/fullGame/${data.id}`} className = "animate__animated animate__bounce" >
     <div className="gameCover">
        <div>
            <img src={`/assets/gameCover/${data.image}.png`} alt="" />
        </div>
        <div>
             <h3>{data.name}</h3>
        </div>
    </div>
        </Link>
}