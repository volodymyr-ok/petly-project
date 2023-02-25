import axios from "axios";

export const PublicApi = axios.create({
  baseURL: "https://petly-2v85.onrender.com",
});
export const PrivateApi = axios.create({
  baseURL: "https://petly-2v85.onrender.com",
});

export const token = {
  set(token) {
    console.log("set", token);
    PrivateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    console.log("unset");
    PrivateApi.defaults.headers.common.Authorization = null;
  },
};
