import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebaseApp";

export const USER_CHAT_DATA = "user-chat-data";

export const db = getFirestore(firebaseApp);

