const active: any = (data: string, params: string)=>
  data === params
    ? "bg-primary-50 text-primary-500 shadow-primary-200/25 border-primary-500"
    : "";

export default active;
