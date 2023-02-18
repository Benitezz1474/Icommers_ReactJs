import { useEffect, useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const useFormContact=()=>{

    //para validar algunas inputs del form
    const [inputContact, setInputContact] = useState({
        
        user : "",
        email : "",
        data: ""
    })

    //se utiliza para avisarle al usuario que no puede escribir mas de 100 charactes
    //cuando llega a cero cambia el valor de otro estado que es alertCharacters
    const [maxCharacter, setMaxCharacter] = useState(inputContact.data.length)
    
    //cuando este estado (alertCharacter) es false, le avisa al usuario que ya no puede
    //seguir escribiendo, ya que la informacion o pregunta (inputContact.data) es mucha
    const [alertCharacters, setAlertChacarcters] = useState(false)

    
    //le avisa al usuario que se envio el formulario correctamente
    const [sendSuccess, setSendSuccess] = useState(false)
  
    
    useEffect(()=>{

        if(inputContact.data.length <= 100) {
              
             setAlertChacarcters(false)
             setMaxCharacter(inputContact.data.length) 
        }

        else if(inputContact.data.length > 99) setAlertChacarcters(true)

        

    },[inputContact.data.length])

    
    const handleForm = async(e) =>{
        
        e.preventDefault();
        
        const {data,email,user} = inputContact
        
        if(data.length <= 0 || email.length <= 0 || user.length <= 0) return
        
        //crear nuevo documento y enviar al servidor (firebase)
        
        const docRef = await addDoc(collection(db, "Coments"), inputContact); //El Id se genera de forma automática :)
        
        //crear un estado que avise al usuario que se enviaron los datos correctamente
        
        setSendSuccess(true) //los datos se enviaron correctamente y cambia ese estado a true :)
        
        console.log(sendSuccess)
    }

    //con este estado le digo al usuario, cuando escriba, cuantos caracteres le quedan

    
    
    const handleInputChange=(e)=>{
        
        setInputContact({
            ...inputContact,
            [e.target.name] : e.target.value
            
        })
        
    }


    return{
        handleForm,
        handleInputChange,
        inputContact,
        maxCharacter,
        alertCharacters,
        sendSuccess,
    }
}