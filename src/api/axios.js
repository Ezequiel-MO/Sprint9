import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2MzcxMzY2MDgsImV4cCI6MTYzNzIyMzAwOH0.oNhlFrWfs7Oy4ghTY6vA3BcnetVV1FiQQN6wH8t8-Ho",
  },
});

export const baseURL = "https://cutt-events.herokuapp.com";
