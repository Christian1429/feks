import axiosInstance from '../axiosInstance';
import axios from 'axios';

// S3 POST
export async function uploadImage(file) {
  const res = await axiosInstance.post('/upload-url', {
    fileName: file.name,
    fileType: file.type,
  });

  const { uploadUrl, imageUrl } = res.data;

  await axios.put(uploadUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return imageUrl;
}

// Neon POST
export async function addArticle(data) {
  const response = await axiosInstance.post('/article', data);
  return response.data;
}

// Neon GET
export async function getAllArticles() {
  const response = await axiosInstance.get('/get-articles');
  return response.data;
}
