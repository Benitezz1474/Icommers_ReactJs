export const firebaseErrors=(error)=>{

    switch(error){

        case "auth/weak-password" : return "Passowrd is very short";

        case "auth/email-already-in-use" : return "Email already in use";

        case "auth/invalid-email" : return "Invalid email";

        default : return "Error code programation";
    }
}