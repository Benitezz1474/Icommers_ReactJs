import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {firebaseGame} from "../Firebase/firebaseGames"

export const useForm = () =>{

    const {load, games} = firebaseGame();

    const navigate = useNavigate();
    
    const [inputValue, setInputValue] = useState("");
    const [searchView, setSearchView] = useState(false)
    
    //FORM

    const handleForm=(e)=>{

        e.preventDefault();
        
        if(inputValue.length <= 1){
            return
        } 

        setSearchView(true)

        navigate(`/games?q=${inputValue}`)

    }
    
    const handleInputChange =(e)=>{
        
        setInputValue(e.target.value);
        
    }


    return{

        handleForm,
        handleInputChange,
        searchView,
        setSearchView,
        inputValue
    }
}