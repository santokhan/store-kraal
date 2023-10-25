import { query, collection, where, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../auth/firestore";
import { getCurrentUser } from "vuefire";
import { fireStore } from "../auth/firebaseApp";
import { COLLECTION_BUSINESS_USER } from "../auth/addBusinessUser";

// read current user role form firebase collection role
export default async function getUserInfo(email: string) {
    let data;
    const colRef = collection(db, COLLECTION_BUSINESS_USER);
    const q = query(colRef, where("email", "==", email));

    // get all user role
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data = doc.data();
    });
    return data;
}

class BusinessUserInfo {
    async getUserData(callBack: (data: any) => void) {
        const user = await getCurrentUser()
        const email = user?.email
        if (!email) return;
        const colRef = collection(fireStore, COLLECTION_BUSINESS_USER);
        // use `"nuku@gmail.com"` for test only
        const q = query(colRef, where("email", "==", email))

        const unSubscribe = onSnapshot(q, (snapshot) => {
            let data: any = {}
            snapshot.docs.forEach(doc => {
                data = doc.data();
                data.id = doc.id;
            })
            callBack(data);
            unSubscribe();
        })
    }
}

export const businessUserInfo = new BusinessUserInfo()
