import { useState } from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import { postArticle, uploadImage } from '../../../api/articleApi';

export default function UploadArticle() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState({
    title: '',
    info: '',
    date: '',
    location: '',
    href: '',
  });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  }

  const formatHref = (href) => {
    if (!href.startsWith('http://') && !href.startsWith('https://')) {
      return `https://${href}`;
    }
    return href;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) {
      alert('Please select an image.');
      return;
    }
    setLoading(true);
    try {
      const imageUrl = await uploadImage(file);
      const articleData = {
        ...data,
        href: formatHref(data.href),
        imageUrl,
      };
      await postArticle(articleData);
      setData({ title: '', info: '', date: '', location: '', href: '' });
      setFile(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert('Error adding article');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: 'auto',
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2}>
        <Typography variant="h5" textAlign="center">
          Lägg till ny artikel
        </Typography>

        <TextField
          label="Titel"
          name="title"
          value={data.title}
          onChange={handleInputChange}
          required
          fullWidth
        />

        <TextField
          label="Artikel text"
          name="info"
          value={data.info}
          onChange={handleInputChange}
          multiline
          rows={4}
          required
          fullWidth
        />

        <TextField
          label="Datum"
          name="date"
          type="date"
          value={data.date}
          onChange={handleInputChange}
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />

        <TextField
          label="Plats det beror tex: Stockholm, Göteborg, Malmö"
          name="location"
          value={data.location}
          onChange={handleInputChange}
          fullWidth
        />

        <TextField
          label="Länk till hemsida"
          name="href"
          value={data.href}
          onChange={handleInputChange}
          fullWidth
        />

        <Button variant="contained" component="label">
          Ladda upp bild
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </Button>

        {preview && (
          <Box
            component="img"
            src={preview}
            alt="Preview"
            sx={{ width: '100%', borderRadius: 1, mt: 1 }}
          />
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? 'Lägger till...' : 'Lägg till artikel'}
        </Button>
      </Stack>
    </Box>
  );
}
