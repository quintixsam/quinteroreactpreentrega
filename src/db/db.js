import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCU1K8kDZiB7d9wVnefbromu-mrb89V69I",
  authDomain: "ecommercereact-f07e4.firebaseapp.com",
  projectId: "ecommercereact-f07e4",
  storageBucket: "ecommercereact-f07e4.firebasestorage.app",
  messagingSenderId: "547438146984",
  appId: "1:547438146984:web:539cdced7500262fa2999d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db