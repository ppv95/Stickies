import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
height: 50px;
width: 100vd;
background-Color:#E2D5CC;
border-radius:3px;
font-famialy:courier new
`

export const NotesScreen = () => {

     const handleLogout = () => {
         
     }
    return (
        <>
        <Container>
            <span
                onClick = {handleLogout}
            >Logout</span>
        </Container>
        </>
    );
}
