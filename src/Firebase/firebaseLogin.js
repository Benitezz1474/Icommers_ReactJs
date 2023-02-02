import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { authContext } from "../CONTEXT";
import { auth } from "./firebase";
import { firebaseErrors } from "./firebaseErrors";

export const firebaseLogin=()=>{

    const [errors, setErrors] = useState()

    const navigate = useNavigate();
    const [load, setLoad] = useState(false)

    const [inputsLogin, setInputsLogin] = useState({
        email : "",
        password : ""
    })

    const handleForm=(e)=>{

        e.preventDefault();

        setLoad(true)

        const {email, password} = inputsLogin


        //con esta funcion de firebase creo un user a partir de un email y una constraseña
        
        signInWithEmailAndPassword(auth,email,password)

        .then(()=>{

            navigate("/home")
        })

        .catch((error)=>{

        //la funcion firebaseErrros retorna un error a partir del codigo
        //y luego lo almaceno en el estado errors con setErrors para luego pasarselos al <Login />
         
        const formError =  firebaseErrors(error.code)

         setErrors(formError)

        })

        .finally(()=> setLoad(false))


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
        handleInputForm,
        load,
        errors
    }
   
}