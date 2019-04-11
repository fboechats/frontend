import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistacksbackend.herokuapp.com"
});

export default api;
