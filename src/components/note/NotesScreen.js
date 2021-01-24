import React, { useState } from 'react'
import styled from 'styled-components';
import { NoteBar } from './NoteBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../styles/components/common/common'
import { NoteModal } from './NoteModal';

const WelcomeParragh = styled.p`
color:#CBBFB7;
text-align:center;
font-family:Arial, Helvetica, sans-serif;
`
const AddButton = styled(Button)`
background-color:#CBBFB7;
margin-top: 30px;
width: 100px;
`
export const NotesScreen = () => {
    
    const [showModal, setshowModal] = useState(false);

    const openModal = () =>{
        setshowModal(!showModal);
    }
    
    return (
        <>
       <NoteBar/>
       <AddButton onClick = {openModal} >
        <FontAwesomeIcon icon={faPlus} /> ADD</AddButton>

             {
                 showModal &&
                 <NoteModal reason = 'Add New Note' modalIsOpen = {showModal} />
             }
        <WelcomeParragh>Come on! <b>Create</b> a note </WelcomeParragh>
        </>
    );
}
