import axiosInstance from '../utils/axiosInstance';
import type { Client } from '../types/Client';
import type { ClientCreate } from '../types/Client';

export const getAllClient = async (data?: any): Promise<Client[]> => {
  try {
    const response = await axiosInstance.get('/auth/client', data);
    const parsedBody = JSON.parse(response.data.body);
    console.log(parsedBody);
    return parsedBody.data.object as Client[];
  } catch (error) {
    throw error;
  }
};

export const putClient = async (client: Client): Promise<Client> => {
  try {
    if (!client.id) {
      throw new Error('Client ID is missing');
    }
    const response = await axiosInstance.put(
      `/auth/client/${client.id}`,
      client
    );
    return response.data as Client;
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};

export const postClient = async (client: ClientCreate): Promise<void> => {
  try {
    await axiosInstance.post(`/auth/client`, client);
    console.log('Client created', client);
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};

export const deleteClient = async (clientId: string): Promise<void> => {
  try {
    if (!clientId) {
      throw new Error('Client ID is missing');
    }
    await axiosInstance.delete(`/auth/client/${clientId}`);
  } catch (error) {
    console.error('Error deleting client:', error);
    throw error;
  }
};

export const getProfile = async (data?: any): Promise<Client> => {
  try {
    const response = await axiosInstance.get('/auth/client/profile', data);
    const parsedBody = JSON.parse(response.data.body);
    return parsedBody.data[0] as Client;
  } catch (error) {
    throw error;
  }
};
