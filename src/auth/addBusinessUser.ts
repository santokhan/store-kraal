import { DocumentData, DocumentReference, addDoc, collection } from "firebase/firestore";
import { fireStore } from "./firebaseApp";

interface BusinessUser {
    firstName: string;
    lastName: string;
    email: string;
    jobTitle: string;
    company: string;
    organization: string;
    accounting: string;
    phone: string;
}
export interface Role { email: string, role: string }

export const COLLECTION_BUSINESS_USER = "business-user"

export default async function addBusinessUser(businessUser: BusinessUser): Promise<DocumentReference<DocumentData> | undefined> {
    try {
        const collectionRef = collection(fireStore, COLLECTION_BUSINESS_USER);
        const docSnapShot = await addDoc(collectionRef, businessUser);
        return docSnapShot;
    } catch (error) {
        console.error('Error adding role: ', error)
    }
}