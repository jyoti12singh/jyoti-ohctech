import { Box, Button, Stack, Typography, Avatar, Grid, useMediaQuery, useTheme } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import avatar from "../../assets/images/avatar.avif"

const EmpHealthDasboard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <ToastContainer />
            <Box sx={{ padding: 0, backgroundColor: '#e0f7fa', borderRadius: 2, marginTop: 0 }}>
                
                <Grid container spacing={10} alignItems="center" sx={{ marginLeft: 1 }}>
                    <Grid item xs={12} sm="auto" textAlign="center">
                        <Avatar
                            alt="Profile Picture"
                            src={avatar} // replace with actual image path
                            sx={{ width: 120, height: 120 }}
                            variant="square"
                        />
                        
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#00796b', marginTop: 1 ,backgroundColor: '#b2ebf2', borderRadius: 2}}>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm="auto" textAlign="center">
                        <Typography variant="h5" gutterBottom justifyContent="center" sx={{ fontWeight: 'bold', color: '#00796b', marginTop: 0, marginBottom: 5,backgroundColor: '#b2ebf2', borderRadius: 2 }}>
                            Employee Health Dashboard
                        </Typography>
                        <Stack direction={isMobile ? "column" : "row"} spacing={2} marginTop={isMobile ? 2 : 0}>
                            <Button variant="contained" sx={{ backgroundColor: '#ce93d8', borderRadius: 0, width: 80, height: 64 }}>HEIGHT</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#ffffff', color: '#000', borderRadius: 0, width: 80, height: 64 }}>WEIGHT</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#9e9e9e', borderRadius: 0, width: 80, height: 64 }}>BMI</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#000000', borderRadius: 0, width: 80, height: 64 }}>BP</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#8bc34a', borderRadius: 0, width: 80, height: 64 }}>PULSE</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#29b6f6', borderRadius: 0, width: 80, height: 64 }}>HEALTH INDEX</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#a5d6a7', borderRadius: 0, width: 80, height: 64 }}>FBS</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#cfd8dc', borderRadius: 0, width: 80, height: 64 }}>RBS</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#ffcc80', borderRadius: 0, width: 80, height: 64 }}>PPBS</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default EmpHealthDasboard;
