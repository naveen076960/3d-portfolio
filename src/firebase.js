// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk-ITftaJTcATQ1gJXCEgbEnjf3wtlazk",
  authDomain: "portfolio-data-node.firebaseapp.com",
  projectId: "portfolio-data-node",
  storageBucket: "portfolio-data-node.firebasestorage.app",
  messagingSenderId: "638906197089",
  appId: "1:638906197089:web:db4ff4ca57f58246f4b620",
  measurementId: "G-93MD9CMNT2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and EXPORT IT (This fixes your error!)
export const db = getFirestore(app);
