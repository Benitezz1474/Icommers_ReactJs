import { useState } from "react";
import { createContext } from "react";
import {useAuthReducer} from "../CONTEXT/useAuthReducer.js";

export const authContext = createContext();

export const AuthProvider=({children})=>{

    // const {onLogin,onLogout,state} = useAuthReducer()


    // const storage = {
    //     login: onLogin,
    //     logout: onLogout,
    //     state
    // }

    
    const [userData, setUserData] = useState(null)

    const userConfig = {
      userData,
      setUserData
    }

    return <authContext.Provider value={userConfig} >
       {children} 
    </authContext.Provider>
}
