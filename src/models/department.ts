import { User } from "./user";

export class Department {
    readonly uuid: string;
    readonly name: string;
    readonly groupUUID: string;

    users = new Map<string, User>();

    constructor(uuid: string, name: string, groupUUID: string) {
        this.uuid = uuid;
        this.name = name;
        this.groupUUID = groupUUID;
    }

    public toJSON() {
        return {
            uuid: this.uuid,
            name: this.name,
            groupUUID: this.groupUUID,
        };
    }

    public static fromJSON(json: {uuid: string, name: string, groupUUID: string}) {
        return new Department(json.uuid, json.name, json.groupUUID);
    }
}