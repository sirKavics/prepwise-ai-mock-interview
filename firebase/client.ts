import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJhHaaNzyMTnXPiDaDEebDsP4tjgLM508",
  authDomain: "prepwise-212f4.firebaseapp.com",
  projectId: "prepwise-212f4",
  storageBucket: "prepwise-212f4.firebasestorage.app",
  messagingSenderId: "616631991347",
  appId: "1:616631991347:web:7a3f7990e719220c84b746",
  measurementId: "G-VK90T3CR5G"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)