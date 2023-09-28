export interface Nav {
    name: string;
    link: string;
}
export interface DropList {
    name: string
    link: string
    icon: string
    title: string
}
export interface NavList {
    name: string
    link?: string
    icon: string
    dropdown?: DropList[]
}

export const navList: Nav[] = [
    { name: "home", link: "/dashboard" },
    { name: "account", link: "/account" },
    { name: "bills", link: "/bills" },
    { name: "logout", link: "/logout" },
]

export const navList2: NavList[] = [
    { name: "Home", link: "/dashboard", icon: "home" },
    { name: "KraalAI", link: "https://kraal-chatbot-ui.netlify.app/", icon: "ai" },
    { name: "Reports", link: "/reports", icon: "docs" },
]

export const navList_with_dropdown: (NavList | NavList)[] = [
    { name: "Home", link: "/kraalai", icon: "home" },
    {
        name: "Reports", icon: "docs", dropdown: [
            { name: "KPI", title: "Key Performance Indicators", link: "/report/kpi", icon: "chart_with_upwards_trend" },
            { name: "13-Week CF", title: "13-Week Cash Flow", link: "/report/wcf", icon: "heavy_dollar_sign" },
            { name: "Adhoc Reports", title: "Adhoc Reports", link: "/report/ar", icon: "mag" },
            { name: "Balance Sheets", title: "Balance Sheets", link: "/report/bl", icon: "chart_with_upwards_trend" },
            { name: "Baseline Report", title: "Baseline Report", link: "/report/br", icon: "bar_chart" },
            { name: "Cash Flow", title: "Cash Flow Statement", link: "/report/cf", icon: "moneybag" },
            { name: "Profit & Loss", title: "Profit & Loss Statement", link: "/report/pl", icon: "bar_chart" },
            { name: "Reporting Pack", title: "Reporting Package", link: "/report/rp", icon: "package" },
        ]
    },
]

export const blueSideBarNavList: { name: string; url: string; icon: string }[] = [
    { name: "Home", url: "/dashboard-blue", icon: "home" },
    { name: "KraalAI", url: "/kraalai", icon: "ai" },
    { name: "Reports", url: "/reports", icon: "docs" },
]

export const userNavList: {
    name: string;
    link: string;
    icon: string;
}[] = [
        { name: "user setting", link: "/user-setting", icon: "user" },
        { name: "team setting", link: "/team-setting", icon: "team" },
        { name: "bills", link: "/bills", icon: "bills" },
        { name: "logout", link: "/logout", icon: "logout" },
    ]
