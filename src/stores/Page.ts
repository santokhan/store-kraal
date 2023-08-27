import { defineStore } from "pinia";
import { useRouter } from "vue-router";

const router: any = useRouter();

export const usePageStore: any = defineStore("page", {
  state: () => ({
    name: "home",
    formN: parseInt(router.name),
    router: router,
  }),
  actions: {
    back(current: number) {
      this.formN = current--;
      this.router.push(`/form/${this.formN}`);
    },
    next(current: number) {
      this.formN = current++;
      this.router.push(`/form/${this.formN}`);
    },
  },
});
