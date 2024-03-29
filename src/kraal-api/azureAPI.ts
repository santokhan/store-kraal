import axios from "axios";
import * as signalR from "@microsoft/signalr";
import * as firebase from "../firebase/services";
import { SignupData } from "../models/signupdata";
import { VITE_API_URL, VITE_CHAT_HUB_URL } from "../config";
import { CreateClientDTO } from "../models/createclientdto";
import { CreateDepartmentDTO } from "../models/createdepartmentdto";

const client = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export let chatHubConnection: signalR.HubConnection | null = null;

client.interceptors.request.use(async function (config) {
    config.headers!.Authorization = `Bearer ${await firebase.getToken()}`;
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
    chats: {
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
    clients: {
        getClients: () => get('/clients'),
        addClient: (createClientData: CreateClientDTO) => post('/clients', createClientData.toJSON()),
        deleteClient: (uuid: string) => deleteReq(`/clients/${uuid}`),
        addUserToClient: (uuid: string, userEmail: string, roleName?: string | null) => post(`/clients/${uuid}/add`, { userEmail: userEmail, roleName: roleName }),
    },
    departments: {
        getDepartments: () => get('/departments'),
        addDepartment: (createDepartmentData: CreateDepartmentDTO) => post('/departments', createDepartmentData.toJSON()),
        deleteDepartment: (uuid: string) => deleteReq(`/departments/${uuid}`),
        addUserToDepartment: (uuid: string, userEmail: string, roleName?: string | null) => post(`/departments/${uuid}/add`, { userEmail: userEmail, roleName: roleName }),
    },
    documents: {
        sendDocuments: (chatId: number, files: File[]) => {
            const formData = new FormData();
            formData.set("chatId", chatId.toString());
            for (const file of files) {
                formData.append("files", file);
            }
            return postForm('/documents', formData);
        },
        sendDocument: (groupUUID: string, file: File) => {
            const formData = new FormData();
            formData.set("groupUUID", groupUUID);
            formData.set("file", file);
            return postForm('/documents/rag', formData);
        },
    },
    quickbooks: {
        getAuthorizationUrl: () => get('/linking/url'),
        link: (code: string, realmId: number) => post('/linking', { code: code, realmId: realmId }),
    },
    users: {
        getUsers: () => get('/users'),
        getUnverifiedUser: () => get('/users/unverifiedme'),
        getUser: () => get('/users/me'),
        editUser: (uuid: string, firstName: string | null, lastName: string | null, title: string | null) => patch(`/users/${uuid}`, { firstName: firstName, lastName: lastName, title: title }),
    }
}
