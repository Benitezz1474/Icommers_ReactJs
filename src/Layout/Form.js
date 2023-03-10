import styled from "styled-components";



export const ContentForm = styled.div`

width: 100vw;
height: 100vh;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`


export const Form = styled.form`

width: 80%;
max-width: 500px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 40px;
border: 1px solid #d2d0d070;
box-shadow: -5px 5px 15px 0 rgba(51,51,51,0.1);
border-radius:20px;
background-color: #fff;

`



export const Input = styled.input`
    
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: none ;
    outline: none;
    border-bottom: 1px solid #c7c6c6;
    border-radius: 5px;
`

export const InputSubmit = styled.input`
    
    border: none;
    outline: none;
    width: 50%;
    max-width: 100px;
    padding: 10px 5px;
    border-radius: 5px;
    background-color: #1e72d9;
    color: #fff;

`
