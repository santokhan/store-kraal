import { List } from "../pl-with-ts/tableData";

export interface Activities {
    description: string;
    amount: string;
}

export const activities: List[] = [
    {
        title: "Cash flows from Operating Activities",
        rows: [
            { label: "Net Income", amount: 60000, color: "#1ADBA5" },
            { label: "Adjustments to reconcile net income:", amount: 0, color: "#1ADBA5" },
            { label: "Depreciation & Amortization", amount: 63000, color: "#1ADBA5" },
            { label: "Loss on Sale of Equipment", amount: 15000, color: "#1ADBA5" },
            { label: "Other", amount: 0, color: "#1ADBA5" },
            { label: "Changes in current assets and liabilities", amount: 0, color: "#1ADBA5" },
            { label: "Increase in accounts receivable", amount: 21000, color: "#1ADBA5" },
            { label: "Decrease in prepaid expenses", amount: 3000, color: "#1ADBA5" },
            { label: "Decrease in accounts payable", amount: 28000, color: "#1ADBA5" },
            { label: "Increase (decrease) in other assets & liabilities", amount: 0, color: "#1ADBA5" },
        ],
    },
    {
        title: "Cash flows from Investing Activities",
        rows: [
            { label: "Capital expenditures", amount: 300000, color: "#376AE6" },
            { label: "Proceeds from sale of equipment", amount: 40000, color: "#376AE6" },
        ],
    },
    {
        title: "Cash flows from Financing Activities",
        rows: [
            { label: "Proceeds from issuing debt", amount: 200000, color: "#ffa352" },
            { label: "Dividends paid", amount: 110000, color: "#ffa352" },
        ],
    },
]