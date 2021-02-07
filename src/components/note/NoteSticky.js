import React from 'react'
import styled from 'styled-components'

export const NoteSticky = () => {

    const StickyContainer = styled.div`
    padding: 20px;
    background-color: #ffff88;
    height: 200px;
    width: 200px;
    margin-top:20px;
    border-radius: 5px;
    `  
    return (
    <StickyContainer>
        <h1>Note Sticky</h1>
        <hr/>
        <p>
            Lorem Imsu
        </p>
    </StickyContainer>
    )
}
