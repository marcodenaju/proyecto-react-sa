// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW4WNt9NEYQDi-iSEjcMZRlUfJIvEPmdM",
  authDomain: "proyecto-react-34d08.firebaseapp.com",
  projectId: "proyecto-react-34d08",
  storageBucket: "proyecto-react-34d08.appspot.com",
  messagingSenderId: "516116768420",
  appId: "1:516116768420:web:de4b25f5cc1e6f2c5ca831",
  measurementId: "G-EMCH63KMG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
