import { useReducer } from "react"
import { Navigate } from "react-router-dom"
import { authReducer } from "./authReducer"

const initialState = {
    loggin: false,
    user:null
} 

 export const useAuthReducer=()=>{

    const [state,dispatch] = useReducer(authReducer,initialState)

    //functions!

    const onLogin=(name)=>{

        const action = {
            type: "login",
            payload: name
        }

        localStorage.setItem("user",name)

        dispatch(action)
    }

    const onLogout=()=>{

        const action = {
            type: "logout",
            payload : null
        }

        dispatch(action)

    }

    return {
        onLogin,
        onLogout,
        state
    }
}