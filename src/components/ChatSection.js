import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { getDocs, orderBy, query, where } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectChatId } from '../features/chatSlice';

function ChatSection() {
    const [convo, setConvo] = useState([]);


    const chatId = useSelector(selectChatId);    
    console.log(chatId)
    
  return (
      <>
      
      
        <ChatsContainer>

            {/* TODO: messages */}
            
            {/* <p>{chatId}</p> */}
          

            <ChatInput />
        </ChatsContainer>
      </>
      
  )
}

export default ChatSection;

const ChatsMain = styled.div`
    background-color: #F2F5F9;
    flex: 0.7;
    margin-top: 85px;
    border: 1px solid purple;
    
    
    display: flex;
    flex-direction: column;
`

const ChatsContainer = styled.div`
    flex: 0.65;
    overflow-y: scroll;
    flex-grow: 1;
    /* background-color: #F2F5F9; */
    border: 2px solid red;
    margin-top: 155px;
    display: flex;
    flex-direction: column;
    /* width: 100%; */


    /* margin-top: 85px;
    flex:0.7; */
    ::webkit-scrollbar {
        display: none;
    }

`




