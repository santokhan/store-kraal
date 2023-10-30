export interface SideBarData {
    id: number
    name: string
}

export interface TypeChatMessage {
    id: number
    uuid: string
    message: string
    author: string
    chatId: number
    timestamp: Date
    // extra for Pinia store only
    typewriter?: boolean
}