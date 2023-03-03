import { PrivateApi } from "../../http/http";

export const removePet = async (id) => {
    const data = await PrivateApi.delete(
      `https://petly-2v85.onrender.com/api/pets/${id}`
    );
    

    return data;
  };