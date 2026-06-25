import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8xkeeDWJ24MwGE6_He8tZK0qRXTmkBGE",
  authDomain: "feedback-wall-8c0c7.firebaseapp.com",
  projectId: "feedback-wall-8c0c7",
  storageBucket: "feedback-wall-8c0c7.firebasestorage.app",
  messagingSenderId: "317967239433",
  appId: "1:317967239433:web:f2851d3c5d1b9d19862bd8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);