import axios from "axios";
// import * as firebase from "@/services/firebase";

// console.log(`Loading API. Base URL: ${import.meta.env.VITE_API_URL}`);
const client = axios.create({
     baseURL: 'https://black-sand-0eb4ae60f.3.azurestaticapps.net/api', // import.meta.env.VITE_API_URL,
     headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
     },
});
client.interceptors.request.use(function (config) {
     // config.headers!.Authorization = `Bearer ${firebase.token}`;
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
          getChat: (id: number) => get('/chats', { id: id }),
          createChat: (name: string) => post('/chats', { name: name }),

          getChatMessages: (chatId: number) => get('/chatmessages', { chatid: chatId }),
          getChatMessage: (id: number) => get('/chatmessages', { id: id }),
          sendChatMessage: (chatId: number, message: string) => post('/chatmessages', { chatid: chatId, message: message }),
     },
}