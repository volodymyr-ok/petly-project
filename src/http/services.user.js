import { PublicApi } from "./http";

export const createUserService = (body) => {
  return PublicApi.post("/auth/register", body);
};
