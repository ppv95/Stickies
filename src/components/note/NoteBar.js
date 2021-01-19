import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styles/components/common/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithubSquare } from '@fortawesome/free-brands-svg-icons'

    

const Container = styled.div`
display:flex;
height: 50px;
width: 100vd;
background-Color:#CBBFB7;
border-radius:3px;
font-famialy:courier new
`
const GithubButton = styled(Button)`
width: 100px;`

export const NoteBar = () => {
    
    const handleGreetings = () => { 
       window.open("https://github.com/ppv95/Stickies")
    }

    return (
        <Container>
            <GithubButton onClick = {handleGreetings} >
            <FontAwesomeIcon icon={faGithubSquare} size = "lg" />
                Github
            </GithubButton>
        </Container>
    )
}
