import { Auth, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
interface Props {
    email: string;
    password: string;
    onSignUp: () => void;
    onUserExist: () => void;
}

async function handleSignUp(props: Props) {
    const auth: Auth = getAuth();
    await createUserWithEmailAndPassword(auth, props.email, props.password).then(userCredential => {
        // const user = userCredential.user;
        props.onSignUp()
    }).catch((error) => {
        props.onUserExist();
    });
};

export default handleSignUp;