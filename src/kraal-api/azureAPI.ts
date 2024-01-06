import axios from "axios";
import * as signalR from "@microsoft/signalr";
import * as firebase from "../firebase/services";
import { SignupData } from "../models/signupdata";
import { UnverifiedUser } from "../models/unverifieduser";
import { VITE_API_URL, VITE_CHAT_HUB_URL } from "../config";

const client = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export let chatHubConnection: signalR.HubConnection | null = null;

client.interceptors.request.use(function (config) {
    config.headers!.Authorization = `Bearer ${firebase.token}`;
    return config;
});

async function get(url: string, data?: Record<string, unknown>) {
    return client.get(url, data).then(res => res.data);
}

async function post(url: string, data?: Record<string, unknown>) {
    return client.post(url, data).then(res => res.data);
}

async function postForm(url: string, data: FormData) {
    return client.post(url, data, { headers: { "Content-Type": "multipart/form-data" } }).then(res => res.data);
}

async function patch(url: string, data?: Record<string, unknown>) {
    return client.patch(url, data).then(res => res.data);
}

async function put(url: string, data?: Record<string, unknown>) {
    return client.put(url, data).then(res => res.data);
}

async function deleteReq(url: string, data?: Record<string, unknown>) {
    return client.delete(url, data).then(res => res.data);
}

export default {
    auth: {
        signupWithBusiness: (signupData: SignupData) => post('/auth/signup', signupData.toJSON()),
        verifyEmail: () => post('/auth/verify'),
    },
    chat: {
        getChats: () => get('/chats'),
        getChat: (id: number) => get('/chats', { params: { id: id } }),
        createChat: (name: string) => post('/chats', { name: name }),
        editChat: (id: number, name: string) => patch(`/chats/${id}`, { name: name }),
        deleteChat: (id: number) => deleteReq(`/chats/${id}`),

        getChatMessages: (chatId: number) => get('/chatmessages', { params: { chatid: chatId } }),
        getChatMessage: (id: number) => get('/chatmessages', { params: { id: id } }),
        sendChatMessage: (chatId: number, message: string) => post('/chatmessages', { chatid: chatId, message: message }),

        sendDocuments: (chatId: number, files: File[]) => {
            const formData = new FormData();
            formData.set("chatId", chatId.toString());
            for (const file of files) {
                formData.append("files", file);
            }
            return postForm('/documents', formData);
        },

        connectHub: async () => {
            console.log("Connecting to hub");
            chatHubConnection = new signalR.HubConnectionBuilder()
                .withUrl(VITE_CHAT_HUB_URL, { accessTokenFactory: () => firebase.token ?? "" })
                .withAutomaticReconnect()
                .build();

            await chatHubConnection.start();
            console.log("Connected to hub");
        },
        joinHubChat: async (chatUUID: string) => {
            console.log(`Joining chat ${chatUUID}`);
            chatHubConnection!.invoke("AddClientToGroup", chatUUID);
            console.log(`Joined chat ${chatUUID}`);
        },
    },
    quickbooks: {
        getAuthorizationUrl: () => get('/linking/url'),
        link: (code: string, realmId: number) => post('/linking', { code: code, realmId: realmId }),
    },
    user: {
        getUnverifiedUser: () => get('/users/unverifiedme'),
        getUser: () => get('/users/me'),
    }
}
