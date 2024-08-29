// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC35JaLHPGOnuYPbtZEuWC3E8UhQ3OQMao",
  authDomain: "blog-c8186.firebaseapp.com",
  projectId: "blog-c8186",
  storageBucket: "blog-c8186.appspot.com",
  messagingSenderId: "691033360892",
  appId: "1:691033360892:web:3fdfbc75a239f0ec828a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db}