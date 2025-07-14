import axiosInstance from '../axiosInstance';

export const regUser = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/signup', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    const parsedBody = JSON.parse(response.data.body);
    const userData = parsedBody.data;
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  } catch (error) {
    throw error;
  }
};