// Chat Right Sidebar
export const rightBarList = [
    { name: "AI Settings" },
    { name: "Meetings" },
    { name: "App Connect" },
    { name: "Planner" },
    { name: "RAG Upload" },
    { name: "Report" },
];

export const get_right_bar_item = (index: number): string => rightBarList[index].name

// Chat Left Sidebar
type NavItem = {
    name: string,
    to: string
}

export const chatLeftBarList: Array<NavItem> = [
    {
        name: "Profile",
        to: "/user/profile"
    },
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
export const get_left_bar_item = (index: number): NavItem => chatLeftBarList[index]

export const generate_icon = (data: { firstName: string, lastName: string }): string => data.firstName[0] + data.lastName[0]