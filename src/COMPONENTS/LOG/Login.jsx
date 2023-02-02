import { Link } from "react-router-dom";
import { firebaseLogin } from "../../Firebase/firebaseLogin";
import { ContentForm,Form,Input,InputSubmit} from "../../Layout/Form";
import { Errors,Spinner } from "./index";
import { firebaseProviderGoogle } from "../../Firebase/firebaseProviderGoogle";

import {FaGoogle, FaFacebook} from "react-icons/fa"

export const Login=()=>{

  const {sigInGoogle} = firebaseProviderGoogle()
  
    const {handleForm,handleInputForm,inputsLogin,load,errors} = firebaseLogin();
    
    return <ContentForm>
    <Form onSubmit={handleForm}>
        
        <h2>Login!</h2>
          <Input type="email" name="email" value = {inputsLogin.email} placeholder = "Your Email" onChange = {handleInputForm} /> <br />
        
        <Input type="password" name = "password" value = {inputsLogin.password} placeholder = "Your Password" onChange = {handleInputForm} /> <br />
        
        <InputSubmit type="submit" value="Login" />

          <Link to = "/register" className = "my-3 py-3 text-info" >Do you dont have a count ? Register</Link>
    </Form>

    
  <div className="my-4 d-flex flex-column  flex-sm-row " >
    
    <button className="btn btn-primary m-2" disabled >Sign In With Facebook <FaFacebook className="mx-2" /> </button>
    <button className="btn btn-primary m-2" onClick={sigInGoogle} >Sign In With Google <FaGoogle className="mx-2" /> </button>
   
    </div>
  
  
      {
          load && <Spinner />
      }
  
      {
          errors && <Errors error={errors} />
      }
  
    </ContentForm>
}



