
import { useReducer } from "react";
import {buyReducer} from "../../DATA/buyReducer.js";

export const ToBuy=()=>{

    const [stateReducer, dispatch] = useReducer(buyReducer,initialState);

    return <h2>To Buy</h2>  
}