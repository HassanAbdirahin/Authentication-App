import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3plmso42vVVgWB-3KPf77qc5F13nUo7o",
  authDomain: "chat--app-v-2.firebaseapp.com",
  projectId: "chat--app-v-2",
  storageBucket: "chat--app-v-2.appspot.com",
  messagingSenderId: "215947822745",
  appId: "1:215947822745:web:0ddb43c0728f6c9ffe9a08",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
