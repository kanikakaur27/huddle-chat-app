import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import{ getAuth }from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdNf_WFOajHivVzebmLE8QQeSnUkmBMcM",
  authDomain: "huddle-chat-app.firebaseapp.com",
  projectId: "huddle-chat-app",
  storageBucket: "huddle-chat-app.appspot.com",
  messagingSenderId: "226519142059",
  appId: "1:226519142059:web:89869417527e863f6bb1ee"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db,auth,provider };