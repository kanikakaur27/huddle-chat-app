import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { enterChat } from "../features/chatSlice";

function ContactName({ doc, user }) {
  const dispatch = useDispatch();
  const showChat = () => {
    dispatch(enterChat(doc.id));
  };
  return (
    <div>
      <Button onClick={showChat}>
        {doc.data().users[0] != user.email
          ? doc.data().users[0]
          : doc.data().users[1]}
      </Button>
    </div>
  );
}

export default ContactName;
