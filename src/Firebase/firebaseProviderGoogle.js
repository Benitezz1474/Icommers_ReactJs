import {GoogleAuthProvider, signInWithPopup,} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import {auth} from "./firebase"

const provider = new GoogleAuthProvider();


export const firebaseProviderGoogle=()=>{

    const navigate = useNavigate();
 
   
    const sigInGoogle=()=>{

        signInWithPopup(auth, provider)
        .then((result) => {
         
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
         
          const user = result.user;
  
          //redirect!
  
          navigate("./home");
  
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
  
          console.log(error.message)
          // ...
        });
    }
    

    return{
        sigInGoogle
    }
}