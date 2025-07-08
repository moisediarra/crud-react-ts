import axios from "axios";

import { client } from "../types/Client";

const UPI_URL = "http://localhost:3001/clients";
export const getClients = () => axios.get<Client[]>(API_URL);
export const getClient = (id:number) => axios.get<Client>('${API_URL}/${id}');
export const createClient = (client : Omit<Client, "id">) =>axios.post<Client>(API_URL, client);
export const updateClient = (client : Client ) => axios.put<Client>(`${API_URL}/${client.id}`, client);
export const deleteClient = (id:number) => axios.delete(`${API_URL}/${id}`);