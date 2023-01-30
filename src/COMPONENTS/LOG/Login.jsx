import { Link } from "react-router-dom";
import { firebaseLogin } from "../../Firebase/firebaseLogin";
import { ContentForm,Form,Input,InputSubmit } from "../../Layout/Form";


export const Login=()=>{

    const {handleForm,handleInputForm,inputsLogin} = firebaseLogin();
    
    return <ContentForm>
    <Form onSubmit={handleForm}>
        <h2>Login!</h2>
        <Input type="email" name="email" value = {inputsLogin.email} placeholder = "Your Email" onChange = {handleInputForm} /> <br />
        <Input type="password" name = "password" value = {inputsLogin.password} placeholder = "Your Password" onChange = {handleInputForm} /> <br />
        <InputSubmit type="submit" value="Login" />


  <div className="my-4">
    
  <button className="btn btn-primary mx-2">Sign In With Facebook</button>
  <button className="btn btn-primary mx-2">Sign In With Google</button>
  </div>

        <Link to = "/register" className = "my-3 py-3 text-info" >Do you dont have a count ? Register</Link>
    </Form>

    </ContentForm>
}



