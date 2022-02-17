import { Button } from "@material-ui/core";
import { signInWithPopup } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { auth, db, provider } from "../firebase";

export const Login = () => {
    const signIn = () => {
        signInWithPopup(auth, provider).then(({ user }) => {
            setDoc(
                doc(db, "users", user.uid),
                {
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    lastseen: serverTimestamp(),
                },
                { merge: true }
            );
        });
    };
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Button onClick={signIn}>Login</Button>
        </div>
    );
};