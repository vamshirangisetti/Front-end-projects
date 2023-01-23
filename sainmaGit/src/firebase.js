// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf2F8UgzEonp7tmepGxC4PJcxyMtfwyuY",
  authDomain: "sainma-aface.firebaseapp.com",
  projectId: "sainma-aface",
  storageBucket: "sainma-aface.appspot.com",
  messagingSenderId: "439856009425",
  appId: "1:439856009425:web:198279a5e6d05a2d2b75f0",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

