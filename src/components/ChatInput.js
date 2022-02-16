import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
  return (
      <ChatInputContainer>
          <form>
              <input type="text" placeholder='Type a message' />
              <Button type='submit' color='green'>
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
        border: 2px solid black;
        /* padding: 40px; */
        /* justify-content: center; */
        padding-left: 40px
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
        right: 55px;
        /* display: none !important; */
        
        /* background-color: green; */
    }
`