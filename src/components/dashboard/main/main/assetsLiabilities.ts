export interface Assets {
    title: string;
    header: string[];
    list: (string | string[])[][];
}

export const assets: Assets = {
    title: "assets",
    header: ['assets', "2.29M"],
    list: [
        ["Cash", ["0.5%", "12.1K"], "#d946ef"],
        ["Crypto", ["0.5%", "12.1K"], "#6366f1"],
        ["Public Investments", ["0.5%", "12.1K"], "#22d3ee"],
        ["Employer Equity", ["0.5%", "12.1K"], "#4ade80"],
        ["Fund Investments", ["0.5%", "12.1K"], "#eab308"],
        ["Angel", ["0.5%", "12.1K"], "#f97316"],
        ["Real Estate", ["0.5%", "12.1K"], "#f87171"],
    ]
}
export const liabilities: Assets = {
    title: "liabilities",
    header: ['liabilities', "51.8K"],
    list: [
        ["Loans", ["0.5%", "12.1K"], "#34d399"],
        ["Credit Cards", ["0.5%", "12.1K"], "#ef4444"],
    ]
};

export function nFormatter(num: any, digits: any): string {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}
