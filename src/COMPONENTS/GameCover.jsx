import { Link } from "react-router-dom";

export const GameCover=({data})=>{
    
    const {id,name,description,gender,image} = data;


    return <Link to = {`/fullGame/${id}`}>
     <div className="gameCover">
        <div>
            <img src={`/public/assets/gameCover/${image}.jpg`} alt="" />
        </div>
        <div>
             <h3>{name}</h3>
        </div>
    </div>
        </Link>
}