// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRVViCesYwFxdkSTsM5JmrvzchU3WqLrQ",
  authDomain: "email-password-auth-bdd8e.firebaseapp.com",
  projectId: "email-password-auth-bdd8e",
  storageBucket: "email-password-auth-bdd8e.appspot.com",
  messagingSenderId: "272613523942",
  appId: "1:272613523942:web:f9e500c20c6fa599275627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;