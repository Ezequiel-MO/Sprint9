import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2Mzc1NzMwODgsImV4cCI6MTYzNzY1OTQ4OH0.TbGA-nHVkE3GUU45kTg0QNIAQP_yV9nK618n6MGxM1s",
  },
});

export const baseURL = "https://cutt-events.herokuapp.com";
