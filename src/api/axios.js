import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2MzU5MjUyNDgsImV4cCI6MTYzNjAxMTY0OH0.jGwBxAg0-bQRkyxV8tCn1VDIBfv4M1BUroBEIATHpO8",
  },
});
