// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIjR2KCERCcdTQj0DwDZh68U05pexulo8",
  authDomain: "final-pt-estrada.firebaseapp.com",
  projectId: "final-pt-estrada",
  storageBucket: "final-pt-estrada.appspot.com",
  messagingSenderId: "537610159444",
  appId: "1:537610159444:web:8637fb7013e35edafdb4c1",
  measurementId: "G-PD3NBJPQWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
