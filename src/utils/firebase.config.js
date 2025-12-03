// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "echostream-17cff.firebaseapp.com",
  projectId: "echostream-17cff",
  storageBucket: "echostream-17cff.firebasestorage.app",
  messagingSenderId: "139233417420",
  appId: "1:139233417420:web:210174e67a1e1c8940ca69",
  measurementId: "G-HKP98RNGT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();