import { Link } from "react-router-dom";
import { ContentForm,Form,Input,InputSubmit } from "../../Layout/Form";
import { firebaseRegister } from "../../Firebase/firebaseRegister";
import {Spinner,Errors} from "./index.js"

export const Register=()=>{

    const {handleForm,handleInputChange,load,inputsRegister,errors} = firebaseRegister()

    const {email,password} = inputsRegister

    return <ContentForm >

    <Form onSubmit={handleForm} >
        <h2>Register!</h2>
         <Input type="email" name="email" value = {email} placeholder = "Your Email" onChange={handleInputChange} /> <br />
        <Input type="password" name = "password" value = {password} placeholder = "Your Password" onChange={handleInputChange} /> <br />
        <InputSubmit type="submit" value="Register" /> 
        
        
        <Link to = "/login" className = "my-3 py-3 text-info" >Do you have a count ? Login</Link>

    </Form>

    {
        load && <Spinner />
    }

    {
        errors && <Errors error = {errors} />
    }

    </ContentForm>
}