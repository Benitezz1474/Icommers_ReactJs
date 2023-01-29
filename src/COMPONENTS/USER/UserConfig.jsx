import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { authContext } from "../../CONTEXT/AuthProvider.jsx"
import { auth } from "../../Firebase/firebase.js"
export const UserConfig=()=>{

    const [userData, setUserData] = useState();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {

                
                setUserData(user)
                            
            } else {
            
            }
          });
    },[])
    
    console.log(userData)

    return <>
    <h1>User Config!!</h1>
    </>
}