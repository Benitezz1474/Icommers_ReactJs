import { authContext } from "../../CONTEXT";
import { firebaseLogin } from "../../Firebase/firebaseLogin";
import { ContentForm,Form,Input,InputSubmit } from "../../Layout/Form";


export const Login=()=>{

    const {handleForm,handleInputForm,inputsLogin} = firebaseLogin();
    
    return <ContentForm>
    <Form onSubmit={handleForm}>
        <Input type="email" name="email" value = {inputsLogin.email} placeholder = "Your Email" onChange = {handleInputForm} /> <br />
        <Input type="password" name = "password" value = {inputsLogin.password} placeholder = "Your Password" onChange = {handleInputForm} /> <br />
        <InputSubmit type="submit" value="Login" />
    </Form>

    </ContentForm>
}



