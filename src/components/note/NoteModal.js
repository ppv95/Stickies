import React from 'react'
import styled from 'styled-components'

const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`

const ModalTextarea = styled.textarea`

`

export const NoteModal = ({reason}) => {
    return (
        <div>
            <ModalDiv>
                <h3 className = 'note-title'>{reason}</h3>

            <input type = 'text'/>
            <textarea></textarea>

            </ModalDiv>
        </div>
    )
}
