// import { useState, useEffect } from 'react';
// import { getStock, Stock } from '../../../api/clientApi';
// import { Box, Typography, CircularProgress } from '@mui/material';
// import '../../index.css';

// const ClientStock: React.FC = () => {
//   const [stock, setStock] = useState<Stock | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchStock = async () => {
//       try {
//         const data = await getStock();
//         setStock(data);
//       } catch (error) {
//         console.error('Error fetching stock:', error);
//         setError(error as Error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchStock();
//   }, []);

//   if (isLoading) return <CircularProgress />;
//   if (error)
//     return (
//       <Typography color="error">Fel vid hämtning av inventarier.</Typography>
//     );

//   return (
//     <Box
//       p={4}
//       className="modal-box"
//       sx={{ backgroundColor: mainColor, color: 'white' }}
//     >
//       {/* Render your stock data here */}
//       {stock ? JSON.stringify(stock) : 'Inga inventarier att visa'}
//     </Box>
//   );
// };

// export default ClientStock;
