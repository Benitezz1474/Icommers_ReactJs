import { auth } from "./firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { firebaseErrors } from "./firebaseErrors"



export const firebaseRegister=()=>{

    const [load, setLoad] = useState(false)

    const [errors, setErrors] = useState()
    
    const navigate = useNavigate()

    const [inputsRegister, setInputsRegister] = useState({
        
        email : "",
        password : ""
    });
    
    const handleForm =(e)=>{

        const {email, password} = inputsRegister

        e.preventDefault();
        
        setLoad(true)
        
        createUserWithEmailAndPassword(auth,email,password)
        
        .then(()=>{

            navigate("./home")
            //redirect!
            
        })
        
        .catch((error)=> {
            
        
        //la funcion firebaseErrros retorna un error a partir del codigo
        //y luego lo almaceno en el estado errors con setErrors para luego pasarselos al <Login />
            
         const formError =  firebaseErrors(error.code)

         setErrors(formError)
            
        })

        .finally(()=>{

            setLoad(false)
        })
        
        
 }
    
    
        const handleInputChange = (e)=>{
    

            setInputsRegister({
                ...inputsRegister,
                [e.target.name] : e.target.value
            })
        }


    return{
        handleForm,
        handleInputChange,
        inputsRegister,
        load,
        errors
    }
    
}