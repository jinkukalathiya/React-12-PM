import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDda6MFZsRX1k2b4E6y67_N3XJy7F5squs",
  authDomain: "movie-crud-app-0203.firebaseapp.com",
  projectId: "movie-crud-app-0203",
  storageBucket: "movie-crud-app-0203.firebasestorage.app",
  messagingSenderId: "14349788456",
  appId: "1:14349788456:web:ee9b9651afb0e8f97b1c1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);