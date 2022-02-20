import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth"

function ChatInput({chatId}) {
    const [message, setMessage] = useState("");
    const [user] = useAuthState(auth);
    const sendMessage=(e)=>{
        e.preventDefault()
        const docRef = doc(db, "chats", chatId);
        const colRef = collection(docRef, "messages");

        addDoc(colRef,{
            // message:message
            message,
            timeStamp : serverTimestamp(),
            sender: user.uid
        }).then(()=>setMessage(""))
    }

  return (
      <ChatInputContainer>
          <form onSubmit={sendMessage}>
              <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='Type a message' />
              <Button type='submit' color='primary'>
                  <SendIcon />
              </Button>
          </form>
      </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    /* border-radius: 20px; */
    > form {
        position: relative;
        display: flex;
        /* border: 2px solid black; */
        /* padding: 40px; */
        /* justify-content: center; */
        padding-left: 40px;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        /* border: 1px solid gray; */
        border: none;
        border-radius: 2rem;
        padding: 20px;
        outline: none;
        background-color: #F2F5F9;
    }

    > form > button {
        position: fixed;
        bottom: 45px;
        right: 40px;
        /* display: none !important; */
        
        /* background-color: green; */
    }
`