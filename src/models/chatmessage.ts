import { Chat } from "./chat";

export class ChatMessage {
    readonly id: number;
    readonly uuid: string;
    readonly message: string;
    readonly author: string;
    readonly chat: Chat;
    readonly timestamp: Date;

    constructor(id: number, uuid: string, message: string, author: string, chat: Chat, timestamp: Date) {
        this.id = id;
        this.uuid = uuid;
        this.message = message;
        this.author = author;
        this.chat = chat;
        this.timestamp = timestamp;
    }

    public toShownChatMessage() {
        return new ShownChatMessage(this.uuid, this.message, this.author, this.chat);
    }

    public static fromJSON(json: {id: number, uuid: string, message: string, author: string, chat: Chat, timestamp: Date}) {
        return new ChatMessage(json.id, json.uuid, json.message, json.author, json.chat, json.timestamp);
    }
}

export class ShownChatMessage {
    readonly uuid: string;
    message: string;
    readonly author: string;
    readonly chat: Chat;

    constructor(uuid: string, message: string, author: string, chat: Chat) {
        this.uuid = uuid;
        this.message = message;
        this.author = author;
        this.chat = chat;
    }

    public static fromJSON(json: {uuid: string, message: string, author: string, chat: Chat}) {
        return new ShownChatMessage(json.uuid, json.message, json.author, json.chat);
    }
}