import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom"
import { games } from "../DATA/games";

export const FullPicture=({setFirstImage})=>{ 
    
    const params = useParams();
    
    console.log(params)
    
    useLayoutEffect(()=>{
        setFirstImage();  
    },[]) 
    
    return <>
    
       <img src={`/assets/fullGame/${params.image}.jpg`} alt="" />
    
     </>
    
}