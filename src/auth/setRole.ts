import { addDoc, collection } from "firebase/firestore";
import { db } from "./firestore";

interface Role { email: string, role: string }

async function addRoleToFirestore(role: Role) {
    try {
        const collRef = collection(db, "role")
        const docRef = await addDoc(collRef, {
            email: role.email,
            role: role.role
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error('Error adding role: ', error)
    }
}

export default addRoleToFirestore;