export default function isEmail(emailAdress: string): boolean {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (emailAdress.match(regex))
    return true;
  else
    return false;
}