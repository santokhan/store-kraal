import { defineStore } from "pinia";
import { ref } from "vue";
export interface Chat {
    id?: number;
    robot?: Promise<string> | string;
    user: string;
}

const useChatInstanceStore: any = defineStore("chatInstance", () => {
    // first chatList on page load
    const database = ref<Chat[]>([])
    function addInitial(value: Chat[]) {
        database.value = value;
    }
    // Lifting state up form chat input
    function handleSubmitedText(message: string) {
        function findMax(list: any[]): number {
            let max: number = 0;
            list.forEach((e: any) => {
                if (max < e.id) max = e.id;
            });
            return max + 1
        }
        function addUserInput(message: string, max: number) {
            database.value.push({
                id: max,
                user: message,
            });
        }
        function addResponse(message: string, max: number) {
            // !important
            async function APIRequest(message: string) {
                let url = "http://localhost:9000";
                url = "https://kraal-aggnuk-kts3.vercel.app";
                return await fetch(url + "/chat?message=" + encodeURI(message), {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json;charset=UTF-8",
                    },
                }).then((res) => res.json());
            }
            function add(res: string) {
                database.value.forEach((e: any, i: number) => {
                    if (database.value[i].id == max && database.value[i].user) {
                        database.value[i].robot = res;
                    }
                });
            }
            function generateSummary(res: string) {
                const trimRes = res.slice(0, 200);
                // summary generation API developed using Express.js + Firebase
                // use the correct url to get summary
                let url = "https://kraal-aggnuk-kts3.vercel.app/?summary=" + encodeURI(trimRes);
                fetch(url, {
                    headers: { Accept: "application/json", "Content-Type": "application/json;charset=UTF-8" },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        // props.handleQueryName(data);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            }
            APIRequest(message)
                .then((res) => {
                    // push new response to vue state
                    add(res);
                    // generate summary for chatgpt header
                    generateSummary(res);
                })
                .catch((error) => {
                    add("I didn’t quite get that. Please rephrase and ask the question again.");
                    console.log(error);
                });
        }

        const newMax = findMax(database.value);
        addUserInput(message, newMax);
        addResponse(message, newMax);
    }
    return { database, addInitial, handleSubmitedText }
});


export default useChatInstanceStore;
