import { Box, Stack, Typography, Button } from "@mui/material";

export default function Logout() {
  return (
    <Stack
      sx={{
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: 'cover',
        padding: { xs: 2, md: 4 },
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        
        
      }}
    >
      <Box
        sx={{
          textAlign: 'left',
          marginRight: { xs: '4px'},
          marginTop: { xs: '15px',sm:'45px',lg:'1px'},
          padding: { xs: 2, md: 4 },
          backgroundColor: 'rgba(0, 0, 0, 0)',
          width: { xs: '100%', sm: '55%', md: '55%', lg: '50%' },
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            marginLeft:{ xs: '22%', sm: '0', md: '0', lg: '0' },
            width: { xs: '50%', sm: '60%', md: '55%', lg: '180px' },
            height: { xs: '30%', sm: '30%', md: '55%', lg: '50px' },
          }}
        >
          <img
            src="/logo.svg"
            alt="logo"
            style={{
              marginTop: '1rem',
              marginLeft:'-.2rem'
            }}
          />
        </Typography>
        <Typography gutterBottom>
          <Box sx={{ textAlign:'left',fontWeight:'bold', color:'#000600de', fontSize:{ xs: '87%',sm: '23px', lg: '25px' },}}>
            Thank you for your dedication to patient care, Have a restful break.

          </Box>
          {/* <Box sx={{ textAlign:'left',fontWeight:'bold', color:'#000600de', fontSize:{ xs: '75%',sm: '17px', lg: '25px' },marginTop:'-4px'}}>
             Have a restful break.
          </Box> */}
        </Typography>

        <Typography display="flex" justifyContent="left" marginTop={1.3}    sx={{width: { xs: '30%', sm: '60%', md: '55%', lg: '180px' },
            height: { xs: '30%', sm: '30%', md: '55%', lg: '80px' },
          }}>
        <img
            src="/goodbye.svg"
            alt="logo"
          
            style={{
            
              marginTop: '1rem',
           
            }}
          /> 
        </Typography>

        <Typography>
          <Box sx={{ fontWeight: 'bold', fontSize:{ xs: '23px',sm: '35px',  lg: '30px' }, color: '#000dc9c7', marginTop:'.5rem' }}>
            Goodbye for now!
          </Box>
          <Box sx={{marginTop:'0.5rem',fontSize:{ xs: '13px',sm: '19px',  lg: '18px' }}}>
          You've successfully signed out on this device. Sign back in to get access to all of your patient's details, daily work, and everything else you have saved on your account.
          </Box>
        </Typography>
        
        <Button type="submit"  fullWidth variant="contained" sx={{ mt: 4, mb: 3, bgcolor: '#1819d9d11' ,textTransform:'none'}} >
          Sign back in
        </Button>
      </Box>
    </Stack>
  );
}