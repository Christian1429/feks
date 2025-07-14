import axiosInstance from '../utils/axiosInstance';

export const getAllClient = async (data) => {
  try {
    const response = await axiosInstance.get('/auth/client', data);
    const parsedBody = JSON.parse(response.data.body);
    console.log(parsedBody);
    return parsedBody.data.object;
  } catch (error) {
    throw error;
  }
};

export const putClient = async (client) => {
  try {
    if (!client.id) {
      throw new Error('Client ID is missing');
    }
    const response = await axiosInstance.put(
      `/auth/client/${client.id}`,
      client
    );
    return response.data;
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};

export const postClient = async (client) => {
  try {
    await axiosInstance.post(`/auth/client`, client);
    console.log('Client created', client);
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};

export const deleteClient = async (clientId) => {
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

export const getProfile = async (data) => {
  try {
    const response = await axiosInstance.get('/auth/client/profile', data);
    const parsedBody = JSON.parse(response.data.body);
    return parsedBody.data[0];
  } catch (error) {
    throw error;
  }
};
