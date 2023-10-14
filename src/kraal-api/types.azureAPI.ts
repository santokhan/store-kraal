export interface SideBarData {
    id: number
    name: string
}

export interface TypeChatMessage {
    id: number
    message: string
    author: string
    chatId: number
    // extra for Pinia store only
    typewriter?: boolean
}