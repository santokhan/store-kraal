import { defineStore } from "pinia";
import { reactive } from "vue";

export const useFormDataStore = defineStore("formdata", () => {

  const state: any = reactive({
    value: {
      answers: { a: "", b: "", c: "" },
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
      user: { name: { firstname: "", lastname: "" }, password: "", phone: "" },
      wagesUsage: { landModal: "", statement: "" },
    }
  })

  // function updateAnswers(answers: { a: "", b: "", c: "", }) {
  //   state.value.answers = answers;
  // }

  function updateAnswers(identifier: string, item: string) {
    state.value.answers[identifier] = item;
  }
  function updateAssets(identifier: string, item: any) {
    state.value.assets[identifier] = addToList(state.value.assets[identifier], item);
  }
  function updateHelloList(identifier: string, item = "") {
    state.value.assets[identifier] = addToList(state.value.hello[identifier], item);
  }
  function updateProfileList(identifier: string, item = "") {
    state.value.profile[identifier] = addToList(state.value.profile[identifier], item);
  }
  function updateInvest(obj: any) {
    Object.assign(state.value.invest, obj);
  }
  function updateMindset(id: string | number, data: string) {
    state.value.mindset[id] = data;
  }
  function updatePayment(amount: number) {
    state.value.payment = amount;
  }
  function updateTrial(amount: number) {
    state.value.trial = amount;
  }
  function updateProfile(id: string | number, data: string) {
    state.value.profile[id] = data;
  }
  function updateWagesUsage(obj: any) {
    Object.assign(state.value.wagesUsage, obj);
  }
  function update(id: string | number, data: string | number) {
    state.value[id] = data;
  }

  let updatedState = state.value
  return { ...updatedState, updateAnswers, updateAssets, updateHelloList, updateProfileList, updateInvest, updateMindset, updatePayment, updateTrial, updateProfile, updateWagesUsage, update }
});

// reuseable function
function addToList(list: string[], item: string) {
  if (list.includes(item)) {
    list = list.filter((e) => e !== item);
  } else {
    list.push(item);
  }
  return [...list];
}

interface State {
  assets: {
    a: string[],
    b: string[],
    c: string[],
    d: string[],
    e: string[],
    f: string[],
    g: string[],
    h: string[],
    i: string[],
    j: string[],
    k: string[],
    l: string[],
  },
  email: string,
  hello: string,
  invest: { a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string },
  loading: boolean,
  mindset: { retirement: string, typically: string, contribute: string },
  payment: number,
  profile: {
    hopesList: string[],
    debt: string,
    interested: string,
    quickly: number,
    spending: string,
    yourself: string,
    ageGroup: number,
    age: number,
    employment: string,
    living: string,
    income: number,
  },
  trial: number,
  user: { name: { firstname: string, lastname: string }, password: string, phone: string | number },
  wagesUsage: { landModal: string, statement: string },
}