import axios from "axios";
// import { PublicApi, PrivateApi } from "../../http/http";

// https://petly-2v85.onrender.com/api/notices?page=2

export const newsApi = axios.create({
  baseURL: "https://petly-2v85.onrender.com/api/",
  params: {
    limit: 6,
    page: 1,
    search: "",
  },
});

export const getNews = async (params) => {
  try {
    const response = await newsApi.get(`/news`, { params });
    return response.data;
  } catch (error) {
    console.log("file: newsServices.js:24 ~ error >>", error);
  }
};

export const getNewsBySearch = async (params) => {
  try {
    const res = await newsApi.get(`/news`, { params });
    return res.data;
  } catch (error) {
    console.log("file: newsServices.js:29 ~ error >>", error);
  }
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
