import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, } from '../../styles/components/common/common';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useForm } from '../../hooks/useForm';

// Inputs

const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    padding: 20px;
   
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

const SaveButton = styled(Button)`
width: 60px;
`       

export const NoteModal = ({modalIsOpen,noteAction}) => {

    const [isOpen, setcloseModal] = useState(modalIsOpen)
    const handleCloseModal = () => setcloseModal(!isOpen);

    const [formValues,handleInputChange] = useForm({
        title:'',
        description: '',
        completed: false
    });
    
    const {title,description,completed} = formValues;

    const handleOnSave = () => {
        console.log(title,description);
    }

    return (
        <div>
        <Modal
        open = {isOpen}
        onClose = {handleCloseModal}
        classNames = {{
            overlay: 'customOverlay',
            modal: 'customModal',
        }} 
        center
        >
        <ModalDiv>

            <h2>{noteAction}</h2>
            <hr/>
            <ModalInput type = 'text' 
            placeholder = "Title"
            value = {title}
             onChange = {handleInputChange}
             style = {{width: '800px'}}/>

            <ModalTextarea placeholder = "Description"
            value = {description}
            onChange = {handleInputChange}
             />
        </ModalDiv> 

        <SaveButton
        onClick = {handleOnSave}
        >Save</SaveButton>
        </Modal>       
        </div>
    )
}
