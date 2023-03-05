import axios from "axios";

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
    console.log("file: newsServices.js:17 ~ error >>", error);
  }
};
