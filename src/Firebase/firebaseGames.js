import {db} from "./firebase"
import { collection, getDocs, onSnapshot } from "firebase/firestore"; 

import { useEffect, useState } from "react";

export const firebaseGame=()=>{

    const [games, setGames] = useState(false);
    const [load, setLoad] = useState(false)

    console.log("me renderizo")

  useEffect(()=>{
   
    onSnapshot(
        collection(db, "Products"),

        (data)=>{
            
          const  result = data.docs.map(doc => {
                 
                return {
                    ...doc.data(),
                    id : doc.id
                }
            })

            setGames(result)
            setLoad(true)
        },

        (err)=> console.log(err)
    )
    
  },[])

  console.log(games)


    return{
        games,
        load
    }

}

