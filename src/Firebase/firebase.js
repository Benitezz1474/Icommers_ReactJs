// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqJRRqPj6Wa11xI_P_NrHMLRUZFU80ZW8",
  authDomain: "myfirstfirebase-ceb34.firebaseapp.com",
  projectId: "myfirstfirebase-ceb34",
  storageBucket: "myfirstfirebase-ceb34.appspot.com",
  messagingSenderId: "1086914487535",
  appId: "1:1086914487535:web:9daa0a870e006da5f9671a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)