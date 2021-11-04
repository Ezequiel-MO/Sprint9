import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2MzYwMTQyMjgsImV4cCI6MTYzNjEwMDYyOH0.OWMk2LxYe0loqHm1vqGfZWflzpMYow26oroMn90n_EA",
  },
});

export const baseURL = "https://cutt-events.herokuapp.com";
