import React from 'react'
import styled from 'styled-components'
import { Button, Inputs } from '../../styles/components/common/common';
import Modal from 'react-modal';


const customStyles = {
    content : {
      top           : '50%',
      left          : '50%',
      right         : 'auto',
      bottom        : 'auto',
      marginRight   : '-50%',
      transform     :'translate(-50%, -50%)',
      
    }
  };

const ModalDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color:white;
    width: 1000px;
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
Padding: 8px;
`

const SaveButton = styled.div(Button)


export const NoteModal = ({modalIsOpen,noteAction}) => {

    const closeModal = () => {
        modalIsOpen = !modalIsOpen;
        
    }

    return (
        <div>
        <Modal
        isOpen = {modalIsOpen}
        contentLabel = {noteAction}
        ariaHideApp={false}
        style = {customStyles}
        >
        <ModalDiv>
        <h3 className = 'note-title'>{noteAction}</h3>
           
            <ModalInput type = 'text'
            placeholder = "Title"
            style = {{width: '800px'}}
            />

           <ModalTextarea placeholder = "Description" />

            <SaveButton>
            Save
            </SaveButton>
        </ModalDiv> 
        </Modal>       
        </div>
    )
}
