
import {  ref, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import {storage} from "./firebase"

export const firebaseGetImgs=()=>{

    const starsRef = ref(storage, 'assets/fullGame/spiderMan.png');
    
    getDownloadURL(starsRef)
      .then((url) => {
        console.log(url)
        setImageUrl
      })
      .catch((error) => {
      console.log("algo salio mall! :(")
      });

      return{
        id  : 1
      }

}