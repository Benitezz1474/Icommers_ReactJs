
import { useState } from "react"
import { firebaseGame } from "../Firebase/firebaseGames"

export const getGameById=(gameName,array)=>{

        const result = array.filter(obj => {
            
            if(obj.name.toLocaleLowerCase().includes(gameName)) {
                return obj
            };
        })
        
    

    return result

}