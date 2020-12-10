import styled from "styled-components"

export const FormContainer = styled.div`
width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;

font-family: Arial, Helvetica, sans-serif;
font-size: 15px
`

export const StyledAuthContainer = styled.div`
border-radius: 8px;
background: white;
width: 250px;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
padding: 25px;
transition: transform 2s;
`

export const AuthInput = styled.input`
//border: 1px solid purple;
border: none;
border-bottom: 1px solid #1890ff;
border-radius: 2px;
margin: 4px;
padding: 8px;
width: 240px;

&:focus{
    outline: 0; 
 }
`