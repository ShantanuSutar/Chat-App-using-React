import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPdfqEai1qsF1qM_uggSVIhk-4kZRBOcs",
  authDomain: "chit-chat-62ed4.firebaseapp.com",
  projectId: "chit-chat-62ed4",
  storageBucket: "chit-chat-62ed4.appspot.com",
  messagingSenderId: "1006006097185",
  appId: "1:1006006097185:web:c78f3bb4a40d7959345a60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
