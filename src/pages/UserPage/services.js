import { PrivateApi } from "../../http/http";

export const removePet = async (id) => {
    const data = await PrivateApi.delete(
      `https://petly-2v85.onrender.com/api/pets/${id}`
    );
    

    return data;
  };

  export const editPet = async (file) => {
    const data = await PrivateApi.patch(
      `https://petly-2v85.onrender.com/api/pets/${file[0]}`, file[1]
    );
    return data;
  };
  export const editPetAvatar = async (file) => {
    let data
    if(file[2]){
      data = await PrivateApi.patch(
        `https://petly-2v85.onrender.com/api/pets/avatars/${file[0]}`, file[2]
      );
    }
    return data;
  };

  export const addPets = async (file) => {
    const data = await PrivateApi.post(
        `https://petly-2v85.onrender.com/api/pets/`, file
      );
    return data;
  };

  // export const addPets = createAsyncThunk(
  //   "pets",
  //   async (obj, { rejectWithValue }) => {
  //     try {
  //       const data = await PrivateApi.post("/api/pets", obj);
  //       return data;
  //     } catch (error) {
  //       return rejectWithValue(error.message);
  //     }
  //   }
  // );
  