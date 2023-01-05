import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { games } from "../DATA/games";

export const useForm = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    const [inputValue, setInputValue] = useState("");
    const [searchView, setSearchView] = useState(false)
    // const [gameSearch, setGameSearch] = useState(0);


  
    const removeAlert=()=>{
        setSearchView(false);
        console.log(searchView)
    }



    //FORM

    const handleForm=(e)=>{
        e.preventDefault();

        console.log(location)
        
        if(inputValue.length <= 1) return
        setSearchView(!searchView)

        navigate(`/games?q=${inputValue}`)

    }
    
    const handleInputChange =(e)=>{
        
        setInputValue(e.target.value);
        
        // games.map(game => {
        //     if(game.name.toLowerCase().includes(inputValue)) setGameSearch(game.name);
        // });

    }


    return{

        handleForm,
        handleInputChange,
        // handleTextArea,
        searchView,
        // gameSearch,
        removeAlert,
        inputValue
    }
}