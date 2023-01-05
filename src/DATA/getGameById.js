
import { games } from "./games"

export const getGameById=(gameName)=>{

    const result = games.filter(obj => {
    
        if(obj.name.toLocaleLowerCase().includes(gameName)) {
            return obj
        };
    })

    return result;

}