export interface Rows {
    label: string;
    amount: number;
    color: string;
}

export interface List {
    title: string;
    rows: Rows[];
    total?: number;
}

export const list: List[] = [
    {
        title: "Revenue",
        rows: [
            { label: 'Sales', amount: 1000000, color: '#ff0000' },
            { label: 'Cost of Goods Sold', amount: 750000, color: '#ff0000' },
        ],
    },
    {
        title: "Operating Expense",
        rows: [
            { label: 'Selling', amount: 50000, color: '#AB45E6' },
            { label: 'Administrative', amount: 35000, color: '#AB45E6' },
        ],
    },
    {
        title: "Non Operating Expenses",
        rows: [
            { label: 'Interest on Loans', amount: 10000, color: '#ff0000' }
        ],
    },
]

export function calculateTotal(list: List[]): List[] {
    return list.map((e: List) => {
        let total = 0
        e.rows.map((ele: Rows) => {
            total += ele.amount
            return ele
        })
        e.total = total;
        return e;
    })
}