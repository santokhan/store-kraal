import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

interface authParams {
    user: any,
    warn: any,
    onSignIn: () => void,
    onError: (obj: any) => void
}

function authenticate(authParams: authParams) {
    const { user, warn, onSignIn, onError } = authParams;
    const { email, password } = user;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            if (user) {
                onSignIn()
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            onError({ errorCode, errorMessage })
        });
}

export default authenticate;