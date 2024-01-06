// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { VITE_FIREBASE_SERVICE_CREDENTIALS } from "../config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export let firebaseApp: FirebaseApp;
export let fireStore: Firestore;

export async function firebaseInit() {
    if (!VITE_FIREBASE_SERVICE_CREDENTIALS) {
        throw new Error(`VITE_FIREBASE_SERVICE_CREDENTIALS variable not defined`);
    }

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = JSON.parse(VITE_FIREBASE_SERVICE_CREDENTIALS)

    // Initialize Firebase App and export
    firebaseApp = initializeApp(firebaseConfig);

    // Initialize Firestore db instance and export
    fireStore = getFirestore(firebaseApp)
}

