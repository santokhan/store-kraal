export function log(variable: any) {
    console.log(variable);
}

export default function isEmail(emailAdress: string): boolean {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    return !!emailAdress.match(regex);
}