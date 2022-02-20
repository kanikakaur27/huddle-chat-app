import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterChat } from "../features/chatSlice";

function ContactName({ doc, user }) {
  const dispatch = useDispatch();
  const showChat = () => {
    dispatch(enterChat(doc.id));
  };
  return (
    <ContactNameContainer>
      <Button onClick={showChat}>
        <Avatar style={{marginRight:'10px'}}/>
        <p>{doc.data().users[0] != user.email
          ? doc.data().users[0]
          : doc.data().users[1]}</p>
      </Button>
    </ContactNameContainer>
  );
}

export default ContactName;

const ContactNameContainer = styled.div`
  > button{
    padding: 0px 10px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-transform: lowercase;

    
  }
  

  
`