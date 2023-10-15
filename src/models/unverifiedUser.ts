export class UnverifiedUser {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly businessName: string | null;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    constructor(firstName: string, lastName: string, email: string, businessName: string | null) {
        this.firstName = firstName;
        this.lastName = lastName
        this.email = email;
        this.businessName = businessName;
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            businessName: this.businessName,
        };
    }

    public static fromJSON(json: {firstName: string, lastName: string, email: string, businessName: string | null}) {
        return new UnverifiedUser(json.firstName, json.lastName, json.email, json.businessName);
    }
}