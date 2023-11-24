import { defineStore } from "pinia"
import { chartColour } from "../components/dashboard/main/main/chart/chartData"

export const useRightBarStore = defineStore("chatStoreRightBar", {
    state: () => ({
        settings: [
            {
                name: "Buddy",
            },
            {
                name: "AI Settings",
            },
            {
                name: "Meetings",
            },
            {
                name: "Planner",
            },
            {
                name: "RAG",
                to: "rag"
            },
            {
                name: "Connect",
            }
        ]
    }),
    actions: {}
})