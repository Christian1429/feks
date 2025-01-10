// import { List, ListItem, ListItemText } from '@mui/material';
// import { pageLinks } from '../../data';

// const PageLinks = ({ parentClass, itemClass, isAuthenticated }) => {
//   return (
//     <List
//       className={parentClass}
//       id="nav-links"
//       sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}
//     >
//       {pageLinks.map(
//         (link) =>
//           (!isAuthenticated || link.text.toLowerCase() !== 'login') && (
//             <ListItem
//               key={link.id}
//               className={itemClass}
//               sx={{ width: 'auto', padding: 0 }}
//             >
//               <ListItemText
//                 primary={
//                   <a
//                     href={link.href}
//                     className="nav-link"
//                     style={{ textDecoration: 'none', color: 'inherit' }}
//                   >
//                     {link.text}
//                  </a>
//                 }
//               />
//             </ListItem>
//           )
//       )}
//     </List>
//   );
// };

// export default PageLinks;
