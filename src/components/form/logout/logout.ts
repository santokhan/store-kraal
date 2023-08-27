import { getAuth, signOut } from "firebase/auth";

function logout(redirect: () => void) {
    const auth = getAuth();
    signOut(auth).then(() => {
        // pass a callback to redirect because `router.replace('/...')` only work on `setup`
        redirect()
        // console.log('Sign-out successful');
    }).catch((error) => {
        console.log(error);
    });
}

export default logout;