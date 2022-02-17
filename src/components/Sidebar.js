import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import { auth, db } from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { addDoc, collection, query, where } from 'firebase/firestore';
import {useCollection} from "react-firebase-hooks/firestore"
import ContactName from './ContactName';


function Sidebar() {
    const [user] = useAuthState(auth);
    const addChat=()=>{
        const email=prompt("Enter email id");
        addDoc(collection(db,"chats"),{
            users: [email, user.email]
        })
    }
// array-contains -> membership in array
    const q = query(collection(db,"chats"),where('users','array-contains',user.email))

    const [myChats] = useCollection(q);
    console.log(myChats)
  return (
      <>
        <SidebarContainer>
            {/* <SidebarHeader>
                <form>
                    <SearchIcon style = {{ position:'relative', zIndex:2, left: 35, alignSelf: 'center', color:'gray'}}/>
                    <input type="text" placeholder='SEARCH' />
                    <Button hidden type='submit'> SEND </Button>
                </form>
            </SidebarHeader> */}
            <Button onClick={addChat}>Add Chat</Button>
            {myChats?.docs?.map((doc)=>(
                <ContactName key={doc.id} doc={doc} user={user}/>
            ))}
            {/* TODO: chats */}
        </SidebarContainer>
      </>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
    background-color: #F2F5F9;
    max-width: 350px;
    flex: 0.35;
    border: 2px solid blue;
    margin-top: 155px;
    /* height: 100vh; */
`
const SidebarHeader = styled.div`
    display: flex;
    padding: 10px;
    padding-top: 20px;
    > form {
        display: flex;
        justify-content: center;
        width: 100%;
        
    }

    > form > input {
        padding: 10px 10px 10px 40px;
        outline: none;
        width: 80%;
        border-radius: 2rem;
        border: none;
        color: black;
        font-weight: 540;
    }

    > form > button {
        display: none !important;
    }

  
`