import React, { useState } from 'react'
import styled from 'styled-components';
import { NoteBar } from './NoteBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../styles/components/common/common'
import { NoteModal } from './NoteModal';
import { NoteSticky } from './NoteSticky';
import { useSelector } from 'react-redux';


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

const StickyContainer = styled.div`
flex-wrap: wrap; 
display: flex;
flex-direction: row;
`

export const NotesScreen = () => {
  
    const {notes} = useSelector(state => state.note)
    const [showModal, setshowModal] = useState(false);
    const openModal = () =>{
        setshowModal(!showModal);
    }
       
    return (
        <>
       <NoteBar/>

     <StickyContainer>
        {
            notes.map( (note) => <NoteSticky {...note} 
            key = {note.id} />)
        }
        </StickyContainer>

       <AddButton onClick = {openModal} >

        <FontAwesomeIcon icon={faPlus} /> ADD</AddButton> 
             {
                 showModal &&
                 <NoteModal noteAction = 'Add New Note' modalIsOpen = {showModal} />
             }
        <WelcomeParragh>Come on! <b>Create</b> a note </WelcomeParragh>
        </>
    );
}
