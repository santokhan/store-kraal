import { collection, getDocs, query, where, } from "firebase/firestore";
import { db } from "../auth/firestore";

// read current user role form firebase collection role
// return user role in string
async function getUserRole(email: string) {
    let role;
    const colRef = collection(db, 'role');
    const q = query(colRef, where("email", "==", email));

    // get all user role
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const userRole = doc.data()
        role = userRole.role
    });
    return role;
}

export default getUserRole;

