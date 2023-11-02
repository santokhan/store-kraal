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