import axiosInstance from '../utils/axiosInstance';

interface LoginData {
  email: string;
  password: string;
}

interface UserData {
  token: string;
  username: string;
  role: string;
}

export const regUser = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/signup', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data: LoginData): Promise<UserData> => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    const parsedBody = JSON.parse(response.data.body);
    const userData: UserData = parsedBody.data;
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  } catch (error) {
    throw error;
  }
};
