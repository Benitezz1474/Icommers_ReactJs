// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLD2mfNKZKCZu-uVhrwMsaWtIZR9UajoE",
  authDomain: "react-firebase-b3bcc.firebaseapp.com",
  projectId: "react-firebase-b3bcc",
  storageBucket: "react-firebase-b3bcc.appspot.com",
  messagingSenderId: "832072977356",
  appId: "1:832072977356:web:f444e1d82cd3b7cad4ab69"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)