// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA351r5OyocLmSrSnzcG7urhDyETV7flTw",
  authDomain: "african-producers.firebaseapp.com",
  projectId: "african-producers",
  storageBucket: "african-producers.appspot.com",
  messagingSenderId: "704139097438",
  appId: "1:704139097438:web:539e2c124ded9c6eec8bcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
