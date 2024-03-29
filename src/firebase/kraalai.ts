import { type DocumentData, collection, addDoc, getDoc, doc, deleteDoc, where, query, getDocs, updateDoc, } from "firebase/firestore";
import { type ChatList, Chat } from "../stores/chatSideBarTypes";
import { fireStore } from "../auth/firebaseApp";

export const USER_CHAT_DATA = "user-chat-data";

class KraalAIStore {
    async addDoc(chatInstance: ChatList, callBack: () => void) {
        const chat: any = chatInstance
        delete chat._id;
        try {
            const docRef = await addDoc(collection(fireStore, USER_CHAT_DATA), chat)
            callBack()
        } catch (error) {
            this.logErr(`Error adding document ${error}`)
        }
    }
    async getDoc(uid: string, callBack: (docs: DocumentData[]) => void) {
        try {
            const colRef = collection(fireStore, USER_CHAT_DATA)
            const q = query(colRef, where('uid', '==', uid))
            const dataSnap = getDocs(q)
            dataSnap.then(data => {
                const docs = data.docs.map(doc => {
                    const data = doc.data();
                    data._id = doc.id
                    return data
                }).sort((a, b) => a.id - b.id)
                callBack(docs)
            })
        } catch (error) {
            this.logErr(`Error reading document.  ${error}`)
        }
    }
    async updateDocNav(docID: string, nav: string) {
        // Require 'docID' for firestore docRef
        if (docID) {
            if (nav) {
                try {
                    const docRef = doc(fireStore, USER_CHAT_DATA, docID)
                    await updateDoc(docRef, { nav })
                    this.logErr(`Document field nav was updated`)
                } catch (error) {
                    this.logErr(`Error updating document field nav. ${error}`);
                }
            } else {
                this.logErr(`Can not read undefined of 'nav'`)
            }
        } else {
            this.logErr(`Can not read undefined of 'docID'`)
        }
    }
    async updateDocChats(docID: string, chats: Chat[]) {
        // Info: The 'docID' already validated before invocation
        if (chats) {
            // ToDo: Set { stopTypeWriter : true } before update to FireStore
            let isSetStopTypeWriter = true;
            chats.forEach(e => {
                if (!e.stopTypeWriter) {
                    isSetStopTypeWriter = false;
                }
            })
            if (isSetStopTypeWriter) {
                try {
                    const docRef = doc(fireStore, USER_CHAT_DATA, docID)
                    await updateDoc(docRef, {
                        chats: chats
                    })
                    this.logErr(`Document field chats was updated`)
                } catch (error) {
                    this.logErr(`Error updating document field chats. ${error}`);
                }
            } else {
                this.logErr(`Set 'stopTypeWriter : true' for each chats before send to Firestore`)
            }
        } else {
            this.logErr(`Can not read undefined of 'chats'`);
        }
    }
    async deleteDoc(docId: string, callBack: () => void) {
        // get `docID` and delete `docRef` by `docID`
        try {
            const docRef = doc(collection(fireStore, USER_CHAT_DATA), docId)
            await deleteDoc(docRef)
            callBack()
            this.logErr(`Document deleted from Firebase and Pinia.`)
        } catch (error) {
            this.logErr(`Error deleting document ${error}`)
        }
    }
    logErr(str: string) {
        // Todo: Comment out on production to clear console
        // console.log(`DB: ${str}`)
    }
}
export default new KraalAIStore();

