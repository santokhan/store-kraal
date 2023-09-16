import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default async function ForgotPassword(email: string, callback: () => void) {
    try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
        callback()
    } catch (error) {
        alert("Could not send reset email");
    }
}