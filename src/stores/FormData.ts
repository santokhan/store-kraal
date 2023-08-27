import { defineStore } from "pinia";
import { reactive } from "vue";

export const useFormDataStore = defineStore("formdata", () => {

  const state: any = reactive({
    answers: { a: "", b: "", c: "", d: "" },
    assets: {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
      g: [],
      h: [],
      i: [],
      j: [],
      k: [],
      l: [],
    },
    email: "",
    hello: "",
    invest: { a: "", b: "", c: "", d: "", e: "", f: "", g: "", h: "", i: "" },
    loading: true,
    mindset: { retirement: "", typically: "", contribute: "" },
    payment: 0,
    profile: {
      hopesList: [] as any,
      debt: "",
      interested: "",
      quickly: 0,
      spending: "",
      yourself: "",
      ageGroup: 0,
      age: 0,
      employment: "",
      living: "",
      income: 0,
    },
    trial: 0,
    user: { email: "", name: { firstname: "", lastname: "", nickname: "" }, password: "", phone: "" },
    wagesUsage: { landModal: "", statement: "" },
  })

  const actions: any = {
    updateAnswers(identifier: string, item: string) {
      state.answers[identifier] = item;
    },

    updateAssets(identifier: string, item: any) {
      state.assets[identifier] = addToList(state.assets[identifier], item);
    },

    updateHelloList(identifier: string, item = "") {
      state.assets[identifier] = addToList(state.hello[identifier], item);
    },

    updateProfileList(identifier: string, item = "") {
      state.profile[identifier] = addToList(state.profile[identifier], item);
    },

    updateInvest(obj: any) {
      Object.assign(state.invest, obj);
    },

    updateMindset(id: string | number, data: string) {
      state.mindset[id] = data;
    },

    updatePayment(amount: number) {
      state.payment = amount;
    },

    updateTrial(amount: number) {
      state.trial = amount;
    },

    updateProfile(id: string | number, data: string) {
      state.profile[id] = data;
    },

    updateWagesUsage(obj: any) {
      Object.assign(state.wagesUsage, obj);
    },

    update(id: string | number, data: string | number) {
      state[id] = data;
    },
  }

  let updatedState = state
  return { ...updatedState, ...actions }
});

// reuseable 
function addToList(list: string[], item: string) {
  if (list.includes(item)) {
    list = list.filter((e) => e !== item);
  } else {
    list.push(item);
  }
  return [...list];
}

