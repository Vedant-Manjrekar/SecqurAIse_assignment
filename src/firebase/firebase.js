// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOPtfcYuU6gUaBZhDj_jGRG9DgMJLBM1M",
  authDomain: "secquraise-assignment-492d4.firebaseapp.com",
  databaseURL:
    "https://secquraise-assignment-492d4-default-rtdb.firebaseio.com",
  projectId: "secquraise-assignment-492d4",
  storageBucket: "secquraise-assignment-492d4.appspot.com",
  messagingSenderId: "601161471882",
  appId: "1:601161471882:web:798fd076e6c33bb304da73",
  measurementId: "G-3C4LH5YM8R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
