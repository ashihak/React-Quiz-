// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAV50vy6lQIhj-aJYF9uzh8fZO6q2sP2LQ",
  authDomain: "react-quiz-94de6.firebaseapp.com",
  projectId: "react-quiz-94de6",
  storageBucket: "react-quiz-94de6.appspot.com",
  messagingSenderId: "998100148346",
  appId: "1:998100148346:web:f6b9d9121efacd6618dbc3"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);