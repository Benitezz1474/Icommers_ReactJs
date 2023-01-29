import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export const Logout=()=>{
    
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location)

    
    
    return <>
       <h2>Good Bye</h2>
    </>
}