/**
 * Tab 1
 */
export type MeetingProps = {
    title: string
    createdAt: string | Date
    label: string
    active?: boolean
}

export const meetingList: Array<MeetingProps> = [
    {
        title: "Meeting Title",
        createdAt: new Date().toDateString(),
        label: "AI Attend",
        active: true,
    },
    {
        title: "Meeting Title",
        createdAt: new Date().toDateString(),
        label: "AI Attend",
        active: true,
    },
    {
        title: "Meeting Title",
        createdAt: new Date().toDateString(),
        label: "AI Attend",
        active: true,
    },
]

/**
 * Tab 2
 */
export type MeetingDetailsProps = {
    title: string
    createdAt: string | Date
    description: string
}

export const meetingDetailsList: Array<MeetingDetailsProps> = [
    {
        title: "Meeting Title",
        createdAt: new Date().toDateString(),
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        title: "Meeting Title",
        createdAt: new Date().toDateString(),
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        title: "Meeting Title",
        createdAt: new Date().toDateString(),
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
]
