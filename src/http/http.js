import axios from "axios";
export const PublicApi = axios.create({
  baseURL: "https://petly-backend",
});
export const PrivateApi = axios.create({
  baseURL: "https://petly-backend",
});

export const token = {
  set(token) {
    PrivateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    PrivateApi.defaults.headers.common.Authorization = null;
  },
};
