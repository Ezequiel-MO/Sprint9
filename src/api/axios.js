import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2MzY0NDcxODIsImV4cCI6MTYzNjUzMzU4Mn0.joFgg5P3I-59lYCeT8GfHZrtthcQ-q4jZv5kFPSmoo4",
  },
});

export const baseURL = "https://cutt-events.herokuapp.com";
