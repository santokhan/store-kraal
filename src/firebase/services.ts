import { FirebaseError, initializeApp } from "firebase/app";
import * as firebase from "firebase/auth";
import { type MultiFactorError, getAuth, onAuthStateChanged, RecaptchaVerifier } from "firebase/auth";
import { firebaseApp } from "../auth/firebaseApp";

// const configs = JSON.parse(import.meta.env.VITE_FIREBASE_SERVICE_CREDENTIALS);
// initializeApp(configs);

// BASIC AUTHENTICATION

const auth = getAuth(firebaseApp);
let loading = true;
let user: firebase.User | null = null;
export let token: string | null = null;

export async function createUser(email: string, password: string) {
    try {
        const credentials = await firebase.createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification();
    } catch (error) {
        console.log(error);
    }
}

export async function signIn(email: string, password: string, elementId: string) {
    try {
        const credentials = await firebase.signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (error instanceof FirebaseError) {
            if (error.code == 'auth/multi-factor-auth-required') {
                console.log("Multi factor authentication required");
                const resolver = firebase.getMultiFactorResolver(auth, error as MultiFactorError);
                const provider = new firebase.PhoneAuthProvider(auth);
                const recaptcha = getInvisibleRecaptcha(elementId);
                const verificationId = await provider.verifyPhoneNumber({
                    multiFactorHint: resolver.hints[0],
                    session: resolver.session,
                }, recaptcha);
                return { resolver, verificationId };
            } else {
                console.log(error);
            }
        } else {
            console.log(error);
        }
    }
}

export async function completeSignIn(resolver: firebase.MultiFactorResolver, verificationId: string, code: string) {
    const credential = firebase.PhoneAuthProvider.credential(verificationId, code);
    const multiFactorAssertion = firebase.PhoneMultiFactorGenerator.assertion(credential);
    await resolver.resolveSignIn(multiFactorAssertion);
}

export async function sendEmailVerification() {
    try {
        const user = await getCurrentUser();
        if (!user) {
            console.log("Can't send email: not signed in");
            return false;
        }
        await firebase.sendEmailVerification(user, {
            url: window.location.origin + '/email-verified',
        });
        console.log(`Verification email sent to ${user.email}`);
        return true;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export async function getCurrentUser() {
    while (loading) {
        await new Promise((res, rej) => setTimeout(() => res(true), 100));
    }
    if (user) {
        console.log(`User logged in: ${user.email}`);
    } else {
        console.log(`User not logged in`);
    }
    return user;
}

export async function refreshToken() {
    token = await user?.getIdToken() ?? null;
}

onAuthStateChanged(auth, async (newUser) => {
    user = newUser;
    await refreshToken();
    loading = false;
});


// MULTI-FACTOR AUTHENTICATION

export async function getMultiFactor() {
    const user = await getCurrentUser();
    if (!user) {
        return null;
    }
    return firebase.multiFactor(user);
}

export function getInvisibleRecaptcha(elementId: string) {
    return new RecaptchaVerifier(elementId, {
        size: 'invisible',
        callback: (response: unknown) => {
        }
    }, auth);
}

export async function enrollPhoneAuthentication(phoneNumber: string, elementId: string) {
    const multiFactorSession = await (await getMultiFactor())?.getSession();
    if (!multiFactorSession) {
        return null;
    }
    const provider = new firebase.PhoneAuthProvider(auth);
    const recaptcha = getInvisibleRecaptcha(elementId);
    const verificationId = await provider.verifyPhoneNumber({
        phoneNumber: phoneNumber,
        session: multiFactorSession,
    }, recaptcha);
    return verificationId;
}

export async function verifyEnrollPhoneAuthentication(verificationId: string, code: string) {
    const multiFactor = await getMultiFactor();
    if (!multiFactor) {
        return;
    }
    const credential = firebase.PhoneAuthProvider.credential(verificationId, code);
    const multiFactorAssertion = firebase.PhoneMultiFactorGenerator.assertion(credential);
    await multiFactor.enroll(multiFactorAssertion);
}