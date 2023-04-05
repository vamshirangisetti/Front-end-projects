// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNELsWsjwAzaPhKDtzIExXnRWS8hAqg1A",
  authDomain: "otp-project-a1ec5.firebaseapp.com",
  projectId: "otp-project-a1ec5",
  storageBucket: "otp-project-a1ec5.appspot.com",
  messagingSenderId: "57952907280",
  appId: "1:57952907280:web:d71bb0f1326c0820d3da95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
