import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { authContext } from "./AuthProvider"


export const PrivateRoute=({children})=>{


   
    const navigate = useNavigate();
 
    useEffect(()=>{
        
    onAuthStateChanged(auth, user=> {
        if(!user)  navigate("/login")
    })
    },[])

    return children

}