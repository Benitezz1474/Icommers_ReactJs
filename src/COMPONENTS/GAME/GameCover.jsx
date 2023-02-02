import { Link } from "react-router-dom";
import 'animate.css';
export const GameCover=({data})=>{
    

    //lamar a la funcion y pasarle el data.image
    // const {image} =  function(data.image)


    // const {id,name,description,gender,image} = data;

    return <Link to = {`/fullGame/${data.id}`} className = "animate__animated animate__bounce" >
     <div className="gameCover">
        <div>
            {/* <img src={`/assets/gameCover/${data.image}.png`} alt="" /> */}
            <img src={null} alt="" />
        </div>
        <div>
             <h3>{data.name}</h3>
        </div>
    </div>
        </Link>
}