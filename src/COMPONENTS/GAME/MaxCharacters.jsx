import styled from "styled-components"

export const MaxChatacters=({maxChatacters, alertCharacters})=>{


    return <BoxCharacter>
    <TextCharacter className = {`bg-${alertCharacters ? "danger" : "warning"}`} > MAX 100 Characters({maxChatacters})</TextCharacter>
    </BoxCharacter>
}


const BoxCharacter = styled.div`
    
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  

`

const TextCharacter = styled.h6`
    
    padding: 5px 15px;
    border-radius: 10px;
   

`