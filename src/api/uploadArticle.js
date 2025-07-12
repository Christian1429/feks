import axiosInstance from '../axiosInstance';

export async function addArticle(data) {
  const response = await axiosInstance.post('/article', data);
  return response.data;
}
