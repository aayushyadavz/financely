import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxliRi3rlKkIGEibsy2PqJw1WCqnkNxxI",
  authDomain: "financely-33de2.firebaseapp.com",
  projectId: "financely-33de2",
  storageBucket: "financely-33de2.firebasestorage.app",
  messagingSenderId: "848859545354",
  appId: "1:848859545354:web:4ff2fa6a35679d259704f3",
  measurementId: "G-L1JEYC2Q1X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, db, doc, setDoc };
