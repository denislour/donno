import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: useLocalStorage("name", ""),
    email: useLocalStorage("email", ""),
  }),
  actions: {
    logout() {
      this.$patch({
        name: "",
        email: "",
      });
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
    },
    login() {
      this.$patch({
        name: "Jake V",
        email: "denislour@gmail.com",
      });
      localStorage.setItem("userName", this.name);
      localStorage.setItem("userEmail", this.email);
    },
  },
});
