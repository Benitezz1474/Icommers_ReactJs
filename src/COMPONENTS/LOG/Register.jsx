import { Link } from "react-router-dom";
import { ContentForm,Form,Input,InputSubmit } from "../../Layout/Form";


export const Register=()=>{

    return <ContentForm >

    <Form >
        <h2>Register!</h2>
         <Input type="email" name="email" value = {null} placeholder = "Your Email" /> <br />
        <Input type="password" name = "password" value = {null} placeholder = "Your Password"  /> <br />
        <InputSubmit type="submit" value="Login" /> 
        
        
        <Link to = "/login" className = "my-3 py-3 text-info" >Do you have a count ? Login</Link>

        
    </Form>

    </ContentForm>
}