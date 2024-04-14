// import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import  {useLocation}  from 'react-router-dom';
import { Box,Breadcrumbs } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';


export default function Breadcrumb() {

  const location  = useLocation()
  console.log(location)
  let currentLink = ''
  const crumbs = location.pathname.split('/')
   .filter(crumb => crumb !== (''))
   .map(crumb => {
    currentLink =+ `/${crumb}`
    return(
      <Breadcrumbs key={crumb}>
      <Link underline="hover" color="#1976d2" href="/adminHome">
        <HouseIcon  />
      </Link>
        <Link to={currentLink} >{crumb}</Link>
      </Breadcrumbs>
    )
   })

  return (
    <Box >
     {crumbs}
    </Box>
  );
}