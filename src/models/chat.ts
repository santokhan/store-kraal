import { ChatMessage } from "./chatmessage";

export class Chat {
    readonly id: number;
    readonly uuid: string;
    readonly name: string;

    messages = new Map<number, ChatMessage>();

    constructor(id: number, uuid: string, name: string) {
        this.id = id;
        this.uuid = uuid;
        this.name = name;
    }

    public static fromJSON(json: {id: number, uuid: string, name: string}) {
        return new Chat(json.id, json.uuid, json.name);
    }
}