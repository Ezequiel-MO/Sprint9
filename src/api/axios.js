import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://cutt-events.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTdkMjgxMTY5NTA2ZjhkOTkzNDg0YzMiLCJpYXQiOjE2MzYxMDQ1ODksImV4cCI6MTYzNjE5MDk4OX0.I2lkjUtDHkZE-D4Uko2SfigAVsHdkm2WXgHjoxGEwLg",
  },
});

export const baseURL = "https://cutt-events.herokuapp.com";
