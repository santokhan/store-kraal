import { query, collection, where, getDocs } from "firebase/firestore";
import { fireStore } from "../auth/firebaseApp";

// read current user role form firebase collection role
async function getUserInfo(email: string) {
    let data;
    const colRef = collection(fireStore, 'user');
    const q = query(colRef, where("email", "==", email));

    // get all user role
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data = doc.data();
    });
    return data;
}

export default getUserInfo;
