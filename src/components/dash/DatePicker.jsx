import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/sv';

const DatePickerClient = ({ fromDate, toDate, setClient }) => {
  const handleFromDateChange = (newValue) => {
    const formattedDate = newValue ? newValue.toDate().toLocaleDateString('sv-SE') : null;
    setClient((prevClient) => ({
      ...prevClient,
      fromDate: formattedDate,
    }));
  };

  const handleToDateChange = (newValue) => {
    const formattedDate = newValue
      ? newValue.toDate().toLocaleDateString('sv-SE')
      : null;
    setClient((prevClient) => ({
      ...prevClient,
      toDate: formattedDate,
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DatePicker
          label="Från"
          value={fromDate ? dayjs(fromDate) : null}
          onChange={handleFromDateChange}
          slotProps={{ textField: { fullWidth: true } }}
          sx={{ maxWidth: '16.5rem' }}
        />
        <DatePicker
          label="Till"
          value={toDate ? dayjs(toDate) : null}
          onChange={handleToDateChange}
          slotProps={{ textField: { fullWidth: true } }}
          sx={{ maxWidth: '16.5rem' }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerClient;
