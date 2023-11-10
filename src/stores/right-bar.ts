import { defineStore } from "pinia"
import { chartColour } from "../components/dashboard/main/main/chart/chartData"

export const useRightBarStore = defineStore("chatStoreRightBar", {
    state: () => ({
        settings: [
            { name: "Buddy", },
            { name: "AI Settings", },
            { name: "Meetings", },
            { name: "Planner", },
            { name: "RAG", },
            { name: "Connect", }
        ].map((e, i) => ({ name: e.name, listColor: chartColour[i] }))
    }),
    actions: {}
})