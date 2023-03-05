import axios from "axios";
const axiosConfig = { baseURL: "https://petly-2v85.onrender.com" };
const axiosNoticesConfig = {
  baseURL: "https://petly-2v85.onrender.com",
  params: {
    page: 1,
    search: "",
  },
};
export const PublicApi = axios.create(axiosConfig);
export const PrivateApi = axios.create(axiosConfig);

export const PublicNoticesApi = axios.create(axiosNoticesConfig);
export const PrivateNoticesApi = axios.create(axiosNoticesConfig);

export const token = {
  set(token) {
    PrivateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
    PrivateNoticesApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    PrivateApi.defaults.headers.common.Authorization = null;
    PrivateNoticesApi.defaults.headers.common.Authorization = null;
  },
};
