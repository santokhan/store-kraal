// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA529IWXVycZ5mTfchHCzWZdGZhD6i7TGg",
    authDomain: "kraalapp.firebaseapp.com",
    databaseURL: "https://kraalapp-default-rtdb.firebaseio.com",
    projectId: "kraalapp",
    storageBucket: "kraalapp.appspot.com",
    messagingSenderId: "246857133401",
    appId: "1:246857133401:web:5a6872ce97130173697048",
    measurementId: "G-D5J4JWCM0B",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


