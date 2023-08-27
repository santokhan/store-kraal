interface chartObj {
  title: string
  colour: string
  average: number
  spent: number
}

const data: chartObj[] = [
  {
    title: "Cash, Checks & Misc.",
    colour: "#3EB6C7",
    average: 480,
    spent: 270
  },
  {
    title: "Uncategorized",
    colour: "#51ABD1",
    average: 520,
    spent: 200
  },
  {
    title: "Business Expenses",
    colour: "#2D7DC7",
    average: 396,
    spent: 280
  },
  {
    title: "Restaurant & Dining",
    colour: "#745CD6",
    average: 420,
    spent: 280
  },
  {
    title: "Transportation",
    colour: "#B45DAB",
    average: 460,
    spent: 220
  },
  {
    title: "Groceries",
    colour: "#b45d76",
    average: 230,
    spent: 220
  },
  {
    title: "Personal & Family Care",
    colour: "#cf5050",
    average: 510,
    spent: 240
  },
  {
    title: "Travel",
    colour: "#ff724c",
    average: 510,
    spent: 240
  },
  {
    title: "Education",
    colour: "#ff9a32",
    average: 510,
    spent: 300
  }
]

export default data;