import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { getDocs, orderBy, query, where } from 'firebase/firestore';

function ChatSection() {
    const [convo, setConvo] = useState([]);

    useEffect(async() => {
      const chatsCollection = collection(db, 'chats');
      const q = query(chatsCollection, orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
          setConvo({
              id: doc.id,
              data:doc.data()
          })
      })
    
    }, []);
    
    
  return (
      <>
      
      {/* <ChatsMain> */}


        {/* <ChatHeader>
            <Button>Clear Chat</Button>
            <Button>More</Button>
        </ChatHeader> */}
        <ChatsContainer>

            {/* TODO: messages */}
            
            {/* <ChatMessages chatRef={chatRef}>
                {roomMessages?.docs.map(doc =>{
                    const {message, timestamp, user, userimage } = doc.data();
                    return (
                        <Message
                        key = {doc.id}
                        message = {message}
                        timestamp = {timestamp}
                        user = {user}
                        userimage = {userimage}
                        />
                    )
                })}
                <ChatBottom ref={chatRef} />
            </ChatMessages> */}
          

            <ChatInput />
        </ChatsContainer>
      {/* </ChatsMain> */}
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




