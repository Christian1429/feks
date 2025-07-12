import { useState } from 'react';
import { uploadImage } from '../../api/uploadLinks';

export default function ImageUploader() {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);
    try {
      const imageUrl = await uploadImage(file);
      setUploadedUrl(imageUrl);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed');
    }
    setUploading(false);
  };

  return (
    <div>
      <h3>Bild för artikel</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ width: 200, marginTop: 10 }}
        />
      )}
      {uploading && <p>Laddar...</p>}
      {uploadedUrl && (
        <p>
          ✅ Laddades upp kolla url{' '}
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
            här
          </a>
        </p>
      )}
    </div>
  );
}
