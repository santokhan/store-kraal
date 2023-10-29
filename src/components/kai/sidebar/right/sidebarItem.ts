// Chat Right Sidebar
export const rightBarList = [
    { name: "AI Settings" },
    { name: "Meetings" },
    { name: "App Connect" },
    { name: "Planner" },
    { name: "RAG Upload" },
    { name: "Report" },
];

export const get_right_bar_item = (index: number) => rightBarList[index].name

// Chat Left Sidebar
export const chatLeftBarList = [
    {
        name: "User Settings",
        to: "/user-setting"
    },
    {
        name: "Team Settings",
        to: "/team-setting"
    },
    {
        name: "Bills",
        to: "/bills"
    },
    {
        name: "FAQs",
        to: "/faqs"
    },
    {
        name: "Log out",
        to: "/user/sign-out"
    },
]
const get_left_bar_item = (index: number) => chatLeftBarList[index].name