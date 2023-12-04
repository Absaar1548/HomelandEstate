// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homelandestates-c4a1b.firebaseapp.com",
  projectId: "homelandestates-c4a1b",
  storageBucket: "homelandestates-c4a1b.appspot.com",
  messagingSenderId: "907487074365",
  appId: "1:907487074365:web:4369110c3d71fd9ba0f254"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);