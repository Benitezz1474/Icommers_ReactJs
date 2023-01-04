
import { useState } from "react"
import styled from "styled-components"

export const ContactForm=()=>{
  
    const [show, setShow] = useState(true);
  
  return <>

<Box >

   
  <Content>

    <FormGuie >
          <FormText> Guide For To Do Questions </FormText>
          <FormGuie_item>No se responden preguntas o críticas con insultos </FormGuie_item>
          <FormGuie_item>No se responden preguntas evidentes </FormGuie_item>
          <FormGuie_item>No se responden preguntas maliciosas  </FormGuie_item>

    </FormGuie>

    <FormContent>
        <FormText> Do You Have  A Question?</FormText>
        <FormInput type="text" name="userName"  placeholder="UserName" />
        <FormInput type="email" name="email" placeholder="Email" />
          <FormTextArea name="" id="" cols="30" rows="10" placeholder = "You Tell Ous"  />
          <input type="submit" value="Send" className="btn btn-primary" />
    </FormContent>
  </Content>

</Box>
   {/* <ButtonCancel  show = {show} onClick={()=>{setShow(!show)}} > Cancelar Todo </ButtonCancel> */}
    </>
}

const Box = styled.div`
width:100%;
padding: 20px;
// background-color: red;
background-color: #41403F;
`;

const Content = styled.div`
width: 100;
max-width:1000px;
margin:0 auto;
padding: 20px;
display: flex;
align-items:center;
justify-contents: space-around;
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


 }
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