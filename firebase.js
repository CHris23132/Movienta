// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbg2kmr-MheZ3J6LIZFfxc5DlaXX-OIrc",
  authDomain: "movienta-9a9df.firebaseapp.com",
  projectId: "movienta-9a9df",
  storageBucket: "movienta-9a9df.firebasestorage.app",
  messagingSenderId: "724286492463",
  appId: "1:724286492463:web:ed652c5aef1cc387d6dbda",
  measurementId: "G-1KQPST3N1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
