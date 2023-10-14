import axios from "axios";
import * as firebase from "../firebase/services";
import { SignupData } from "../models/signupdata";
import { User } from "../models/user";
import { UnverifiedUser } from "../models/unverifiedUser";

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
    main: {
        getApiVersion: () => get('/'),
    },
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
    },
    quickbooks: {
        getAuthorizationUrl: () => get('/linking/url'),
        link: (code: string, realmId: number) => post('/linking', { code: code, realmId: realmId }),
    },
    user: {
        getUnverifiedUser: () => get('/users/unverifiedme').then(data => UnverifiedUser.fromJSON(data)),
        getUser: () => get('/users/me').then(data => User.fromJSON(data)),
    }
}
