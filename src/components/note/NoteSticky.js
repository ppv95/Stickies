import React from 'react'
import styled from 'styled-components'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NoteSticky = ({title, description, Completed}) => {

    const StickyContainer = styled.div`
    padding: 20px;
    background-color: #ffff88;
    height: 200px;
    width: 200px;
    margin-top:20px;
    margin-right: 20px;
    border-radius: 5px;
    overflow: hidden;
    `  

    return (
    <StickyContainer>
        <h3>{title}</h3>
        <hr/>
        <p>
            {description}   
        </p>
    </StickyContainer>
    )
}
