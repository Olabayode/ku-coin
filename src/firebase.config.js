
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_b9NQOZfgMfNHxtxpLhYkyukVjKdeyiw",
  authDomain: "amazing-485e8.firebaseapp.com",
  projectId: "amazing-485e8",
  storageBucket: "amazing-485e8.appspot.com",
  messagingSenderId: "1011297935041",
  appId: "1:1011297935041:web:a8ddf52b924e1ec8c5be40"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()