import { defineStore } from "pinia";

export const useProgressStore: any = defineStore("progress", {
  state: () => {
    return {
      // range: 4.76,
      range: 0,
    };
  },
  actions: {
    increment(params: number): void {
      if (0 <= this.range && this.range < 100) {
        this.range = this.range * params;
      }
    },
    decrement(params: number): void {
      if (0 <= this.range && this.range < 100) {
        this.range = this.range / params;
      }
    },
  },
});
