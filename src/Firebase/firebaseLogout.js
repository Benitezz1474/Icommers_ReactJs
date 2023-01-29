import { auth } from "./firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export const firebaseLogout=()=>{

    console.log("called")

const navigate = useNavigate()

const handleLogout =()=>{
    
 signOut(auth)

 .then(()=>{
    console.log("navigte...")
    navigate("/login")
 })

 .catch((error)=> console.log(error.message) )

}

return{
    handleLogout
}
}