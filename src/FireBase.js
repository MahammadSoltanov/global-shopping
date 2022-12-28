// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSLznlT15lfU67Oq0-S81uCESsFMZfUxw",
  authDomain: "global-shopping-auth.firebaseapp.com",
  projectId: "global-shopping-auth",
  storageBucket: "global-shopping-auth.appspot.com",
  messagingSenderId: "586693855193",
  appId: "1:586693855193:web:9ee51a1fef7ac7f5d1fbc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};