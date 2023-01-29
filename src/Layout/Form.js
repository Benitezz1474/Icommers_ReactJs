import styled from "styled-components";


export const ContentForm = styled.div`

width: 100vw;
height: 100vh;
background: rgb(255,0,0);
background: linear-gradient(152deg, rgba(255,0,0,0.923406862745098) 0%, rgba(173,0,255,1) 51%, rgba(255,0,179,1) 99%);
display: flex;
align-items: center;
justify-content: center;


`


export const Form = styled.form`

width: 100%;
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
