import { httpPrivate } from "./index";

export const getAllAdmins = async ({ query }: { query: string }) => {
  const response = await httpPrivate.get('/admins', { params: { query } });
  return response.data;
}

export const getAdminById = async (id: string) => {
  const response = await httpPrivate.get(`/admins/${id}`);
  return response.data;
}
