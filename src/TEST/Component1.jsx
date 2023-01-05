import { useContext } from "react"
import { dataContext } from "../HOOKS/gameContext";

export const Component1 =()=>{
    console.log("Component1")
    const info = useContext(dataContext);
    console.log(info)
    return <h2>Componetns 1</h2>
}