import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
});
