import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMvFrkq6T9MChYFYyIqbDkoPa15FpBanM",
    authDomain: "practiceintern-3761b.firebaseapp.com",
    projectId: "practiceintern-3761b",
    storageBucket: "practiceintern-3761b.appspot.com",
    messagingSenderId: "313459053304",
    appId: "1:313459053304:web:78e701d7ba21fd5ac1a10d",
    measurementId: "G-FV8Z0230XH"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const auth = getAuth(app);