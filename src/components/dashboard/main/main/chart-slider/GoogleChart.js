import { defineComponent, h } from "vue";

import { GChart } from "vue-google-charts";

export const type = "ColumnChart";

export const data = [
  ["Getway", "Density", { role: "style" }],
  ["Cash", 8.94, "#b87333"],
  ["Crypto", 8.94, "#b87333"],
  ["Public Investments", 10.49, "silver"],
  ["Employer Equity", 19.3, "gold"],
  ["Fund Investments", 21.45, "#b87333"],
  ["Angel", 19.3, "silver"],
  ["Real Estate", 19.3, "gold"],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  width: 800,
  height: 320,
};

export default defineComponent({
  name: "GoogleChart",
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
      });
  },
});
