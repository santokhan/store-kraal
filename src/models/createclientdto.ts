export class CreateClientDTO {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public toJSON() {
        return {
            name: this.name,
        };
    };
}