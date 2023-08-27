export interface State {
    sidebarMobile: boolean | null;
    sidebarDesktop: boolean
}

export interface Navs {
    id: number;
    content: string
}

export interface SidebarNavs {
    time: string;
    navs: Navs[]
}

export interface Chat {
    robot: string,
    user: string,
    stopTypeWriter?: boolean
}

// Rest API
// We'll read data from server
// We'll send data to server
export interface ChatList {
    _id: string
    chats: Chat[],
    id: number,
    nav: string,
    uid: string,
}
