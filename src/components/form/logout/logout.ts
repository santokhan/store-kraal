import { getAuth, signOut } from "firebase/auth";
import { log } from "../../funtions";

function logout(redirect: () => void) {
    const auth = getAuth();
    signOut(auth).then(() => {
        // pass a callback function to redirect, because `router.push()` only support on `setup`
        redirect()
    }).catch((error) => { log(error); });
}

export default logout;