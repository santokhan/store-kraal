export class SignupData {
    readonly firstName: string;
    readonly lastName: string;
    readonly businessName: string;
    readonly title: string;

    constructor(firstName: string, lastName: string, businessName: string, title: string) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.businessName = businessName;
        this.title = title;
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            businessName: this.businessName,
            title: this.title,
        };
    };
}