import axios from "axios";
import * as firebase from "../firebase/services";

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

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

export default {
    main: {
        getApiVersion: () => get('/'),
    },
    chat: {
        getChats: () => get('/chats'),
        getChat: (id: number) => get('/chats', { params: { id: id } }),
        createChat: (name: string) => post('/chats', { name: name }),

        getChatMessages: (chatId: number) => get('/chatmessages', { params: { chatid: chatId } }),
        getChatMessage: (id: number) => get('/chatmessages', { params: { id: id } }),
        sendChatMessage: (chatId: number, message: string) => post('/chatmessages', { chatid: chatId, message: message }),
    },
}
