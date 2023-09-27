import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE_MONGODB_API,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

async function get(url: string, data?: Record<string, unknown>) {
    return client.get(url, data).then(res => res.data);
}

async function post(url: string, data?: Record<string, unknown>) {
    return client.post(url, data).then(res => res.data);
}

class MongoDBAPI {
    URL = import.meta.env.VITE_MONGODB_API
    create_chat(name: string) {
        return post("/chats", { name })
    }
    read_chat() {
        return get("/chats")
    }
    update_chat(_id: string, name: string) {
        return post("/update-chat", { _id, name })
    }
    delete_chat(id: string) {
        return get("/deletechat", { id })
    }
    // 
    create_messages() { }
    read_messages() { }
    update_messages() { }
    delete_messages() { }
}

const mongo_api = new MongoDBAPI()
export default mongo_api;