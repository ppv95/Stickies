import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styles/components/common/common'

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

    return (
        <Container>
            <GithubButton>
                Source
            </GithubButton>
        </Container>
    )
}
