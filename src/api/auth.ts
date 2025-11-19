import type { AuthCredentials } from "../utils/types";
import { axiosPrivate } from "./index";

export const login = async ({ email, password }: AuthCredentials) => {
  const response = await axiosPrivate.post('/clients/login', { email, password });
  return response.data;
}

export const register = async ({ email, password }: AuthCredentials) => {
  const response = await axiosPrivate.post('/clients/register', { email, password });
  return response.data;
}
