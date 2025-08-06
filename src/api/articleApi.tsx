import axiosInstance from '../utils/axiosInstance';
import axios from 'axios';

export interface UploadImageResponse {
  uploadUrl: string;
  imageUrl: string;
}
export interface Article {
  id: string;
  title: string;
  info: string;
  date: string;
  location: string;
  href: string;
  image_url: string;
  s3key: string
}

// S3 POST
export async function uploadImage(file: File): Promise<string> {
  const res = await axiosInstance.post<UploadImageResponse>('/auth/upload-img', {
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
export async function postArticle(data: Partial<Article>): Promise<Article> {
  const response = await axiosInstance.post<Article>('/auth/article', data);
  return response.data;
}

// Neon GET
export async function getAllArticles(): Promise<Article[]> {
  const response = await axiosInstance.get<Article[]>('/get-articles');
  return response.data;
}

export async function deleteArticle(
  id: string,
  s3key: string
): Promise<{ success: boolean }> {
  const response = await axiosInstance.delete<{ success: boolean }>(
    `/auth/article/${id}`,
    {
      data: { s3key },
    }
  );
  return response.data;
}