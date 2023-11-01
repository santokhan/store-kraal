import { Chat } from "./chat";

export class StreamChatMessage {
    readonly chat: Chat;
    readonly uuid: string;
    readonly content: string;

    constructor(chat: Chat, uuid: string, content: string) {
        this.chat = chat;
        this.uuid = uuid;
        this.content = content;
    }

    public static fromJSON(json: {chat: Chat, uuid: string, content: string}) {
        return new StreamChatMessage(json.chat, json.uuid, json.content);
    }
}