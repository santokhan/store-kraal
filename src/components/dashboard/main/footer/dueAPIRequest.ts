export interface Due {
  bill_type: string
  due_date: string
  amount: string
  vendor: string
}


export default async function dueAPiRequest(callback: (data: Due[]) => void) {
  await fetch("/api/due.json").then(res => res.json())
    .then(data => {
      // See the structure of JSON data
      callback(data.bills);
    }).catch((err) => {
      console.log(err)
    })
}


// Stored inside /public/api/... directory
// {
//   bills: [
//     {
//       bill_type: "string",
//       due_date: "string",
//       amount: "string",
//       vendor: "string",
//     }
//   ]
// }