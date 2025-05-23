import axios from "axios";

export const instance = axios.create({
  baseURL: "https://680b763fd5075a76d98b34a2.mockapi.io/",
  headers: { "Content-Type": "application/json" },
});
