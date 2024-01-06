export let VITE_API_URL: string;
export let VITE_CHAT_HUB_URL: string;
export let VITE_FIREBASE_SERVICE_CREDENTIALS: string;

export async function loadConfig() {
    let json = {
        VITE_API_URL: "",
        VITE_CHAT_HUB_URL: "",
        VITE_FIREBASE_SERVICE_CREDENTIALS: "",
    };
    try {
        const response = await fetch('/assets/config.json');
        json = await response.json();
    } catch {
        console.log("No config.json found");
    }
    VITE_API_URL = json.VITE_API_URL || import.meta.env.VITE_API_URL;
    VITE_CHAT_HUB_URL = json.VITE_CHAT_HUB_URL || import.meta.env.VITE_CHAT_HUB_URL;
    VITE_FIREBASE_SERVICE_CREDENTIALS = json.VITE_FIREBASE_SERVICE_CREDENTIALS || import.meta.env.VITE_FIREBASE_SERVICE_CREDENTIALS;
}