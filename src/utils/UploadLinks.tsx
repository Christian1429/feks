import { uploadImage } from '../api/articleApi';

export async function handleImageUpload(
  e: React.ChangeEvent<HTMLInputElement>,
  setPreview: (url: string | null) => void,
  setLoading: (loading: boolean) => void
): Promise<string | null> {
  const selectedFile = e.target.files?.[0];
  if (!selectedFile) return null;

  setPreview(URL.createObjectURL(selectedFile));
  setLoading(true);
  try {
    const imageUrl = await uploadImage(selectedFile);
    setLoading(false);
    return imageUrl;
  } catch (err) {
    console.error('Upload failed:', err);
    setLoading(false);
    throw err;
  }
}
