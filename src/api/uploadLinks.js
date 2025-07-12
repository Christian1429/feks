import axiosInstance from '../axiosInstance';
import axios from 'axios';

export async function uploadImage(file) {
  const res = await axiosInstance.post(
    '/upload-url',
    {
      fileName: file.name,
      fileType: file.type,
    }
  );

  const { uploadUrl, imageUrl } = res.data;

  await axios.put(uploadUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return imageUrl;
}
