import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { authContext } from "../CONTEXT";
import { auth } from "./firebase";

export const firebaseLogin=()=>{


    const navigate = useNavigate();

    const [inputsLogin, setInputsLogin] = useState({
        email : "",
        password : ""
    })

    const handleForm=(e)=>{

        e.preventDefault();

        const {email, password} = inputsLogin


        signInWithEmailAndPassword(auth,email,password)

        .then((useCredential)=>{
           


            navigate("/home")
        })

        .catch((error)=>{
           console.log(error.message)
        })


    }

    const handleInputForm=(e)=>{

        setInputsLogin({
            ...inputsLogin,
            [e.target.name] : e.target.value
        })
    }

    return{
        inputsLogin,
        handleForm,
        handleInputForm
    }
   
}