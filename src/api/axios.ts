import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const AUTHORIZATION_TOKEN = import.meta.env.VITE_AUTHORIZATION_TOKEN;

console.log(API_URL, AUTHORIZATION_TOKEN);

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
  },
});
