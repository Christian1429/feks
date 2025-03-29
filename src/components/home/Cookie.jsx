// import { useState, useEffect } from 'react';
// import { Button } from '@mui/material';
// import { Card, CardContent } from '@mui/material';

// const CookieBanner = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const hasAccepted = localStorage.getItem('cookiesAccepted');
//     if (!hasAccepted) {
//       setIsVisible(true);
//     }
//   }, []);

//    const acceptCookies = () => {
//      localStorage.setItem('cookiesAccepted', 'true');
//      setIsVisible(false);
//    };

//    const declineCookies = () => {
//      localStorage.setItem('cookiesAccepted', 'false');
//      setIsVisible(false);
//    };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <Card className="p-4 bg-white shadow-lg rounded-lg max-w-lg">
//         <CardContent className="flex flex-col gap-3">
//           <p className="text-sm text-gray-700">
//             Vi använder cookies för att förbättra din upplevelse. Genom att
//             acceptera samtycker du till vår användning av cookies.
//           </p>
//           <div className="flex justify-end gap-2">
//             <Button onClick={declineCookies} className="bg-gray-400 text-white">
//               Avböj
//             </Button>
//             <Button onClick={acceptCookies} className="bg-blue-600 text-white">
//               Acceptera
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default CookieBanner;