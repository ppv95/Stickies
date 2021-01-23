import React from 'react'
import styled from 'styled-components'
// import { Inputs } from '../../styles/components/common/common'

const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`

const ModalInput = styled.input`
width: 800px;
padding: 8px;
`

const ModalTextarea = styled.textarea`
height: 150px;
width: 800px;
resize: none;
margin-top:10px;
`

export const NoteModal = ({noteAction}) => {
    return (
        <div>
            <ModalDiv>
                <h3 className = 'note-title'>{noteAction}</h3>
           
            <ModalInput type = 'text'
            placeholder = "Title"
            style = {{width: '800px'}}
            />

           <ModalTextarea placeholder = "" />
            </ModalDiv>
        </div>
    )
}
