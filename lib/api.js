import axios from "axios";

const api = axios.create({
  // baseURL: "https://api.boom-avto.co/",
  baseURL: "https://api.boomavto.ru/",
});

export default api;
