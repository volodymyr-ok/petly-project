import { PublicApi, PrivateApi } from "../../http/http";

export const getNotice1 = async (value) => {
      try {
        // if (value === "in good hands") value = "in-good-hands";
        const res = await PublicApi.get(`/api/notices/${value}`)
        return res.data;
      } catch (error) {
        return(error.message);
      }
}
export const getNoticeById1 = async (id) => {
        try {
        const res = await PublicApi.get(`/api/notices/${id}`);
        return res.data;
        } catch (error) {
        return (error.message);
        }
}
export const getFavorite1 =  async () => {
      try {
        const res = await PrivateApi.get(`/api/notices/favorite`);
        return res.data;
      } catch (error) {
        return (error.message);
      }
}
export const getMyNorices1 = async () => {
      try {
        const res = await PrivateApi.get(`/api/notices/my`);
        return res.data;
      } catch (error) {
        return (error.message);
      }
}
export const getNoticesBySearch1 = async (query) => {
      try {
        const res = await PublicApi.get(`/api/notices?search=${query}`);
        return res.data;
      } catch (error) {
        return (error.message);
      }
}
export const removeNotice = async (id) => {
  try {
    const res = await PrivateApi.delete(`/api/notices/${id}`);
    return res.data;
  } catch (error) {
    return (error.message);
  }
}