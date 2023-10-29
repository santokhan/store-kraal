import { UserCredential, createUserWithEmailAndPassword, getAuth } from "firebase/auth";

interface Props { email: string, password: string }

export default async function createNewUser(props: Props): Promise<UserCredential> {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, props.email, props.password)
    return userCredential;
};

