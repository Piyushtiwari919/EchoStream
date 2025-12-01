// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxK8sNGEBT_ngYtkLZif0RyEocrRFYWLU",
  authDomain: "netflixgpt-98344.firebaseapp.com",
  projectId: "netflixgpt-98344",
  storageBucket: "netflixgpt-98344.firebasestorage.app",
  messagingSenderId: "119170650066",
  appId: "1:119170650066:web:542e069c2c0be78608420b",
  measurementId: "G-4HS2M3VH5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);