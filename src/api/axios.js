import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2MzcwNTA0MjYsImV4cCI6MTYzNzEzNjgyNn0.836fRCqKuKe4Ija0Cx_qvZtAhDGgUuzaUK7snY-l2Nk",
  },
});

export const baseURL = "https://cutt-events.herokuapp.com";
