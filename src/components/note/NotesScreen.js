import React, { useState } from 'react'
import styled from 'styled-components';
import { NoteBar } from './NoteBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../styles/components/common/common'
import { NoteModal } from './NoteModal';
import { NoteSticky } from './NoteSticky';
import { useDispatch } from 'react-redux';
import { loadNotes } from '../../actions/note';


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

const notesTest = [
    {id: 1,title: "Test Code",description: "I have to test my code",completed: false},
    {id: 2,title: "Buy beers",description: "Need to buy beer for the party",completed: false},
    {id: 3,title: "Learn Forex",description: "Need to get rich with Forex",completed: false}
]

export const NotesScreen = () => {
  
    const dispatch = useDispatch();

    const [showModal, setshowModal] = useState(false);
    const openModal = () =>{
        setshowModal(!showModal);
    }
    const NotesFromStore = dispatch(loadNotes())
    console.log(NotesFromStore);
      
    return (
        <>
       <NoteBar/>

     <StickyContainer>
        {
            notesTest.map((note)=><NoteSticky {...note} 
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
