import { getCurrentUser } from "vuefire";
import getUserRole from "./read.role";
import getUserInfo from "./read.user";
import getBusinessUserInfo from "./read.business.user";

async function getFirestoreUserInfo() {
    let data;
    await getCurrentUser().then(async (user: any) => {
        // get current user form vuefire
        const email: string = user?.email;

        // role is a `Promies` because of async function `getUserRole()`
        await getUserRole(email).then(currentRole => {
            if (currentRole == 'personal') {
                // read personal user data form firestore
                data = getUserInfo(email)
            } else if (currentRole == 'business') {
                // read business user data form firestore
                data = getBusinessUserInfo(email);
            }
        })
    })
    return data;
}

export default getFirestoreUserInfo;
