export class User {
    readonly uuid: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly status: string;
    readonly businessRole: string | null;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get initials() {
        return `${this.firstName[0]}${this.lastName[0]}`;
    }

    constructor(uuid: string, firstName: string, lastName: string, email: string, status: string, businessRole: string | null) {
        this.uuid = uuid;
        this.firstName = firstName;
        this.lastName = lastName
        this.email = email;
        this.status = status;
        this.businessRole = businessRole;
    }

    public toJSON() {
        return {
            uuid: this.uuid,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            status: this.status,
            businessRole: this.businessRole,
        };
    }

    public static fromJSON(json: {uuid: string, firstName: string, lastName: string, email: string, status: string, businessRole: string | null}) {
        return new User(json.uuid, json.firstName, json.lastName, json.email, json.status, json.businessRole);
    }
}