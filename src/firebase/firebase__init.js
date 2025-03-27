// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJxXmiYcA3j0bielfyBOhtESXe5ITlotc",
  authDomain: "email-password-auth-cdd18.firebaseapp.com",
  projectId: "email-password-auth-cdd18",
  storageBucket: "email-password-auth-cdd18.firebasestorage.app",
  messagingSenderId: "295321414474",
  appId: "1:295321414474:web:bb4ca31591b761ac3a2fb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
