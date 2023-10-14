export class SignupData {
    readonly firstName: string;
    readonly lastName: string;
    readonly businessName: string;

    constructor(firstName: string, lastName: string, businessName: string) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.businessName = businessName;
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            businessName: this.businessName,
        };
    };
}