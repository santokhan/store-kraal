import { addDoc, collection } from "firebase/firestore";
import { db } from "./firestore";

interface BusinessUser {
    firstName: string;
    lastName: string;
    email: string;
    jobTitle: string;
    company: string;
    organization: string;
    accounting: string;
    phone: string;
    message: string;
}

export interface Role { email: string, role: string }

async function addBusinessUser(businessUser: BusinessUser) {
    try {
        const docRef = await addDoc(collection(db, "business-user"), businessUser);


        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error('Error adding role: ', error)
    }
}

export default addBusinessUser;