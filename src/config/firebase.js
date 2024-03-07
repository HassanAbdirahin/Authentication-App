import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ0y18j1w86bDzaFJDBm09yP-qkuqGqYo",
  authDomain: "fir-authapp-1dd40.firebaseapp.com",
  projectId: "fir-authapp-1dd40",
  storageBucket: "fir-authapp-1dd40.appspot.com",
  messagingSenderId: "29869298488",
  appId: "1:29869298488:web:fd61bc79cfa4ce9c78a7cd",
  measurementId: "G-7EEP1G1RNG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
