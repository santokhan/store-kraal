import * as firebase from "../firebase/services";

interface Props {
    email: string;
    password: string;
    onSignUp: () => void;
    onUserExist: (status: string) => void;
}

// function handleSignUp(props: Props) {
//     firebase.createUser(props.email, props.password).then(userCredential => {
//         props.onSignUp()
//     }).catch((error) => {
//         props.onUserExist(error.code);
//     });
// };

