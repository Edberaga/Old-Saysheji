// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWuROyTAYiZYNGrB6WIQZc3zYfG9AQWlo",
  authDomain: "saysheji.firebaseapp.com",
  projectId: "saysheji",
  storageBucket: "saysheji.appspot.com",
  messagingSenderId: "11232323414",
  appId: "1:11232323414:web:30a07528da3debd42b18f7",
  measurementId: "G-3MJWMS4HMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);