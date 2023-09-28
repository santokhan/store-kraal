import { Auth, getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface Props {
    email: string;
    password: string;
    onSignUp: () => void;
    onUserExist: (status: string) => void;
}

function handleSignUp(props: Props) {
    const auth: Auth = getAuth();
    createUserWithEmailAndPassword(auth, props.email, props.password).then(userCredential => {
        // const user = userCredential.user;
        props.onSignUp()
    }).catch((error) => {
        props.onUserExist(error.code);
    });
};

export default handleSignUp;