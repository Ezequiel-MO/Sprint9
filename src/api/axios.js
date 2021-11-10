import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2MzY1NDI0MDEsImV4cCI6MTYzNjYyODgwMX0.gBcVwefjp43dmXBmKERawYZQ3i8JOBjPHDan4876St4",
  },
});

export const baseURL = "https://cutt-events.herokuapp.com";
