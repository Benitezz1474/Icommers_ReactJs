
import { useState } from "react"
import styled from "styled-components"
import {useFormContact} from "../../HOOKS/useFormContact"
import {MaxChatacters,SendSuccesForm} from "./index"

export const ContactForm=()=>{
  
    const {handleForm,handleInputChange,inputContact,alertCharacters,sendSuccess,maxCharacter,} = useFormContact()

    // const [show, setShow] = useState(true);
  
  return <>

<Box >

   
  <Content>

    <FormGuie >
          <FormText> Guide For To Do Questions </FormText>
          <FormGuie_item>We dont response evil questions </FormGuie_item>

    </FormGuie>

    <FormContent onSubmit={handleForm}>
        <FormText> Do You Have  A Question?</FormText>
        <FormInput type="text" name="user" placeholder="Your userName" value = {inputContact.user} onChange={handleInputChange}  />
        <FormInput type="email" name="email" placeholder="Your email" value = {inputContact.email} onChange={handleInputChange} />
          <FormTextArea name="data" id="" cols="30" rows="10" placeholder="Your question or data info for we" value = {inputContact.data}  onChange={handleInputChange}  />
          <input type="submit" value="Send" className="btn btn-primary" disabled = {alertCharacters} />
    </FormContent>
  </Content>
  
   {
    sendSuccess && <SendSuccesForm />
   }

   <MaxChatacters maxChatacters={maxCharacter} alertCharacters = {alertCharacters} />

  

</Box>

    </>
}

const Box = styled.div`
width:100%;
padding: 20px;
// background-color: red;
background-color: rgba(51,51,51,0.5);
`;

const Content = styled.div`
width: 100;
max-width:1000px;
margin:0 auto;
padding: 20px;
display: flex;
align-items:center;
justify-content: space-around;
flex-direction:column;

@media screen and (min-width:700px){
  flex-direction:row;
}

@media screen and (min-width: 1200px){
  max-width: 1200px
}
`;

const FormGuie = styled.div`
width: 100%;
padding:50px;
// background-color:red;
margin:0 10px
`

const FormGuie_item= styled.p`
width:100%;
padding: 10px 5px;
margin: 30px 0 ;
background-color: #fff;
text-align:center;

`;

const FormContent = styled.form`

width: 100%;
max-width: 500px;
margin:0 10px;
display:flex;
flex-direction:column;
aling-items:center;
justify-contents: center;
padding: 10px;

`

const FormInput = styled.input`
border:none;
outline:none;
background-color: #fff;
padding: 5px;
margin: 5px 2px;
border-radius: 3px;

`

const FormTextArea= styled.textarea`

border:none;
outline: none;
margin:5px 0;
padding: 5px;
resize: none;


 
`

const FormText = styled.h2`
text-align: center;
margin: 10px 0;
padding: 0 10px;
color: #fff;
`


// const ButtonCancel = styled.button`
// border:none;
// outline: none;
// border-radius: 5px;
// margin: 20px auto;
// padding: 5px;
// background: ${({show})=> show ? "rgba(180,50,50,0.7)" : "rgba(21,21,21,0,9)"};
// color: #fff;
// `