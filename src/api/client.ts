import type { UpdateClient } from "../utils/types";
import { httpPrivate } from "./index";

export const getAllClients = async ({ query }: { query?: string }) => {
  const response = await httpPrivate.get('/clients', { params: { query } });
  return response.data;
}

export const getClientById = async (id: string) => {
  const response = await httpPrivate.get(`/clients/${id}`);
  return response.data;
}

export const updateClientById = async (id: string, data: UpdateClient) => {
  const response = await httpPrivate.put(`/clients/${id}`, data);
  return response.data;
}

export const deleteClientById = async (id: string) => {
  const response = await httpPrivate.delete(`/clients/${id}`);
  return response.data;
}
