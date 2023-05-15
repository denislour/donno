import { defineStore } from "pinia";
import { BreadcrumbModel } from "../interfaces";

export const useBreadcrumbsStore = defineStore({
  id: "breadcrumbs",
  state: () => ({
    breadcrumbs: {
      list: "",
      link: "",
    } as BreadcrumbModel,
  }),
  actions: {
    setBreadcrumbs(value: BreadcrumbModel) {
      this.$patch({ breadcrumbs: value });
    },
  },
});
