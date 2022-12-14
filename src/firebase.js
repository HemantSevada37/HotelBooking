// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGT3KzBDhP0jRDf6hrVnbh9jACskcaoXE",
  authDomain: "hemant-test-two.firebaseapp.com",
  projectId: "hemant-test-two",
  storageBucket: "hemant-test-two.appspot.com",
  messagingSenderId: "154898997842",
  appId: "1:154898997842:web:e7243beb5159c8d6e3758b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);