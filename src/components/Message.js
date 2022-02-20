import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Message({ data }) {
  const [user] = useAuthState(auth);
  // user === data.user ? "message is urs" : "msg is of other person"
  
  return (
    <>
      <p>{data.message}</p>
    </>
  );
}

export default Message;
