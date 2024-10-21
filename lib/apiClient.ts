import axios from 'axios';

const apiClient = axios.create({
  //baseURL: "http://localhost:8080/api",
  //baseURL: "http://localhost:8090/api",
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;