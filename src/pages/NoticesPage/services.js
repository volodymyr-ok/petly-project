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

// -----------------------------------------------------------

// export const getNotice1 = async (value) => {
//   try {
//     // if (value === "in good hands") value = "in-good-hands";
//     const res = await PublicNoticesApi.get(`/api/notices/${value}`);
//     return res.data;
//   } catch (error) {
//     return error.message;
//   }
// };
// export const getFavorite1 = async () => {
//   try {
//     const res = await PrivateNoticesApi.get(`/api/notices/favorite`);
//     return res.data;
//   } catch (error) {
//     return error.message;
//   }
// };
export const getNoticeById1 = async (id) => {
  try {
    const res = await PublicNoticesApi.get(`/api/notices/${id}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getMyNorices1 = async () => {
  try {
    const res = await PrivateNoticesApi.get(`/api/notices/my`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
export const getNoticesBySearch1 = async (query) => {
  try {
    const res = await PublicNoticesApi.get(`/api/notices?search=${query}`);
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
