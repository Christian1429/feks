import { uploadImage } from '../../api/uploadLinks';

export async function handleImageUpload(e, setPreview, setLoading) {
  const selectedFile = e.target.files[0];
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
