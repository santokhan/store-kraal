import { ChatList } from "../chatSideBarTypes";

class API {
    APIURL = "https://kraalapi20230810134811.azurewebsites.net/api/"
    constructor() { }
    getChat() {
        // fetch(this.APIURL, {
        //     method: "GET",
        //     headers: { "Content-Type": "application/json" },
        // }).then(res => res.json()).then(data => {
        //     chatList.value = data;
        // }) 
    }
    getChatList(callback: (chatList: ChatList[]) => void) {
        fetch(this.APIURL, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then(res => res.json()).then(data => {
            callback(data)
        })
    }
    postNewChat(newChat: ChatList) {
        // https://kraalapi20230810134811.azurewebsites.net/api/chats
        fetch(`${this.APIURL}chats`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newChat })
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }
    updateChat(newChat: ChatList) {
        fetch(this.APIURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newChat })
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }
    deleteChat(newChat: ChatList) {
        fetch(this.APIURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newChat })
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }
}

export const api = new API()