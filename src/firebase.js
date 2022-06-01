import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBE5k-hLjTvobaApN7BBaA2kzxapSG76SI",
    authDomain: "expense-mang-84e64.firebaseapp.com",
    projectId: "expense-mang-84e64",
    storageBucket: "expense-mang-84e64.appspot.com",
    messagingSenderId: "833355382157",
    appId: "1:833355382157:web:4b76def65df9ec793411c4",
    measurementId: "G-0SQ5Z21JME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
