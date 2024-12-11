
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRXrB1Nc5ARRxb9qZD5Zdv-OsgOKHMJE8",
  authDomain: "portfolio-9ff08.firebaseapp.com",
  projectId: "portfolio-9ff08",
  storageBucket: "portfolio-9ff08.firebasestorage.app",
  messagingSenderId: "1055819712323",
  appId: "1:1055819712323:web:3e5883c63ecf57173191f6",
  measurementId: "G-QX1EVGW2GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inside firebase.js
console.log("Firebase has been initialized!");
