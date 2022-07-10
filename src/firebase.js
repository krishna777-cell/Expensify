import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChIU6z_bnJJUx2opuE1UleZBAV8dnZpb4",
  authDomain: "authenticaton-check.firebaseapp.com",
  projectId: "authenticaton-check",
  storageBucket: "authenticaton-check.appspot.com",
  messagingSenderId: "414925628400",
  appId: "1:414925628400:web:aee3d87881a5be6d303335",
  measurementId: "G-K7KZ9V6CHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
