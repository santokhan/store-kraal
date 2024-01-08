import { Client } from "./client";
import { Department } from "./department";

export class User {
    readonly uuid: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly status: string;
    readonly businessRole: string | null;
    readonly title: string;

    departments = new Map<string, Department>();
    clients = new Map<string, Client>();

    get department(): Department {
        const [first] = this.departments.values();
        return first;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get initials() {
        return `${this.firstName[0]}${this.lastName[0]}`;
    }

    constructor(uuid: string, firstName: string, lastName: string, email: string, status: string, businessRole: string | null, title: string) {
        this.uuid = uuid;
        this.firstName = firstName;
        this.lastName = lastName
        this.email = email;
        this.status = status;
        this.businessRole = businessRole;
        this.title = title;
    }

    public toJSON() {
        return {
            uuid: this.uuid,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            status: this.status,
            businessRole: this.businessRole,
            title: this.title,
        };
    }

    public static fromJSON(json: {uuid: string, firstName: string, lastName: string, email: string, status: string, businessRole: string | null, title: string}) {
        return new User(json.uuid, json.firstName, json.lastName, json.email, json.status, json.businessRole, json.title);
    }
}