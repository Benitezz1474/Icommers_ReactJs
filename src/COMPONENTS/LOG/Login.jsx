import { authContext } from "../../CONTEXT";
import { firebaseLogin } from "../../Firebase/firebaseLogin";


export const Login=()=>{

    const {handleForm,handleInputForm,inputsLogin} = firebaseLogin();
    
    return <>
    <form onSubmit={handleForm}>
        <input type="email" name="email" value = {inputsLogin.email}  onChange = {handleInputForm} /> <br />
        <input type="password" name = "password" value = {inputsLogin.password}  onChange = {handleInputForm} /> <br />
        <input type="submit" value="Login" />
    </form>

    </>
}

