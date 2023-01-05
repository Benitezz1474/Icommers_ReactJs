import { createContext } from "react"
import { useForm } from "./useForm";

export const dataContext = createContext(); 

export const GameContext = ({children})=>{

    const {removeAlert} = useForm()

    return <dataContext.Provider value={{removeAlert}}>
        {children}
    </dataContext.Provider>

}