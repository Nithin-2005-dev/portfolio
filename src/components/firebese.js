// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4lduZ0VcyY53thdq0KqL4FspyEcN7jYc",
  authDomain: "portfolio-1e17b.firebaseapp.com",
  projectId: "portfolio-1e17b",
  storageBucket: "portfolio-1e17b.appspot.com",
  messagingSenderId: "92502768070",
  appId: "1:92502768070:web:398f40ff79f78b95099ac7",
  measurementId: "G-SMWYNHGJP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);