import { collection, getDocs, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { getCurrentUser } from 'vuefire';
import { fireStore } from './firebaseApp'
import { log } from '../components/funtions';

/**
 * Read user info by query with email === user.email
 */
async function userInfo() {
    await getCurrentUser().then((user) => {
        const email = user?.email;
        if (email) {
            readInfo(email)
        }
    })

    // it will invoke immediately after defined
    function readInfo(email: string) {
        const colRef = collection(fireStore, 'user');
        // use `"nuku@gmail.com"` for test only
        const q = query(colRef, where("email", "==", email))

        const unSubscribe = onSnapshot(q, (snapshot) => {
            let books: any[] = []
            snapshot.docs.forEach(doc => {
                books.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            log(books)
        })
    }
}

function getAllData() {
    const db = getFirestore()
    const colRef = collection(db, 'user');
    const user: any[] = []
    getDocs(colRef).then((snapshot) => {
        snapshot.forEach((item) => {
            if (item.data().email === 'nuku@gmail.com') {
                user.push(item.data())
            }
        })
        log(user);
    }).catch((err) => {
        log(err.message);
    })
}

export default userInfo;
