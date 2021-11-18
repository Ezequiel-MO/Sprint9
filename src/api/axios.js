import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2MzcyMjMzODksImV4cCI6MTYzNzMwOTc4OX0.y4eMhCXUzqmyVggvyO4PE11Xp0q_yjBNLIdS3ChTjek",
  },
});

export const baseURL = "https://cutt-events.herokuapp.com";
