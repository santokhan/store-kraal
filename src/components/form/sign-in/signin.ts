import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

export function authenticate_v1(email: string, password: string) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
}

export default authenticate;