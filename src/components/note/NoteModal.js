import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Inputs } from '../../styles/components/common/common';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color:white;
    
`
const ModalInput = styled.input`
width: 100px;
padding: 10px;



`

const ModalTextarea = styled.textarea`
height: 150px;
width: 800px;
resize: none;
margin-top:10px;
Padding: 8px;
`

export const NoteModal = ({modalIsOpen,noteAction}) => {

    const [isOpen, setcloseModal] = useState(modalIsOpen)
    const handleCloseModal = () => setcloseModal(!isOpen);

    return (
        <div>
        <Modal
        open = {isOpen}
        onClose = {handleCloseModal}
        contentLabel = {noteAction} 
        center
        >
        <ModalDiv>

            <h3>{noteAction}</h3>
            <ModalInput type = 'text' placeholder = "Title" style = {{width: '800px'}}/>
            <ModalTextarea placeholder = "Description" />
            <Button>Save</Button>

        </ModalDiv> 
        </Modal>       
        </div>
    )
}
