import { collection, getDocs, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { getCurrentUser, useCurrentUser } from 'vuefire';

function userInfo() {
    const db = getFirestore()
    const colRef = collection(db, 'user');
    const currentUser = getCurrentUser();
    currentUser.then((user) => {
        const email = user?.email;
        if (email) {
            readInfo(email)
            // console.log(email);
        }
    })

    // it will invoke immediately after defined
    function readInfo(email: string) {
        // run query using `currentUser.email` 
        // use `"nuku@gmail.com"` for test only
        const q = query(colRef, where("email", "==", email))

        // read snapshot after query
        onSnapshot(q, (snapshot) => {
            let books: any = []
            snapshot.docs.forEach(doc => {
                books.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            // console.log(books)
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
        console.log(user);
    }).catch((err) => {
        console.log(err.message);
    })
}

export default userInfo;