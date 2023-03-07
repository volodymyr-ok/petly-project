import { PublicNoticesApi, PrivateNoticesApi } from "../../http/http";

export const getNoticesByCategory = async (category, params) => {
  try {
    const res = await PublicNoticesApi.get(`/api/notices/${category}`, {
      params,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getFavoriteNotices = async (params) => {
  try {
    const res = await PrivateNoticesApi.get(`/api/notices/favorite`, {
      params,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getMyOwnNotices = async (params) => {
  try {
    const res = await PrivateNoticesApi.get(`/api/notices/my`, { params });
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getNoticesBySearch = async (params) => {
  try {
    const res = await PublicNoticesApi.get(`/api/notices`, { params });
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const addNotice = async (data) => {
  try {
    const res = await PrivateNoticesApi.post(`/api/notices`, data);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
export const updateNotice = async (data) => {
  try {
    const res = await PrivateNoticesApi.patch(
      `/api/notices/${data[1]}`,
      data[0]
    );
    return res.data;
  } catch (error) {
    return error.message;
  }
};
export const updateNoticeAvatar = async (data) => {
  try {
    const res = await PrivateNoticesApi.patch(
      `/api/notices/avatars/${data[1]}`,
      data[0]
    );
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const removeNotice = async (id) => {
  try {
    const res = await PrivateNoticesApi.delete(`/api/notices/${id}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
