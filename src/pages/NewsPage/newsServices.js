import axios from "axios";
// import { PublicApi, PrivateApi } from "../../http/http";

// https://petly-2v85.onrender.com/api/notices?page=2

export const newsApi = axios.create({
  baseURL: "https://petly-2v85.onrender.com/api/",
  params: {
    limit: 6,
    page: 1,
  },
});

export const getNews = async (params) => {
  console.log("params ==>", params);
  const response = await newsApi.get(`/news`, { params });
  return response.data;
};

// export const getNotice1 = async (value) => {
//   try {
//     if (value === "in good hands") value = "in-good-hands";
//     const res = await PublicApi.get(`/api/notices/${value}`);
//     return res.data;
//   } catch (error) {
//     return error.message;
//   }
// };
