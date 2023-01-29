import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";

export const PublicRoute=({children})=>{
    
    const navigate = useNavigate();
    
    
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if(user) {
                
                //si hay user navega a home
                  navigate("/home")
  
              }
             
          })
      },[])
    
      return children
}