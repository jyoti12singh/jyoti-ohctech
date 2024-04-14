import Box from "@mui/material/Box";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Typography } from "@mui/material";

const Hover = {
    '&:hover': {
        color: 'white',
        backgroundColor: '#c090e8',
        cursor: 'pointer'
    },
    '&:hover.child': {
        color: '#160325'
    },
};

const CustomCard = ({ data, handleClick }) => {
    return (
        <Box
            width='100%'
            display="flex"
            gap={2}
        >
            {data.map((item, index) => {
                return (
                    <Box
                        key={index}
                        boxShadow={3}
                        minHeight={150}
                        minWidth={120}
                        my={4}
                        display="flex "
                        flexDirection='column'
                        alignItems="center"
                        gap={4}
                        p={2}
                        borderRadius="6%"
                        backgroundColor="#3ccfd4"
                        sx={Hover}
                        onClick={() => handleClick(item)}

                    >
                        <MedicalServicesIcon className="child" sx={{ fontSize: 40, color: "#fff" }} />

                        <Typography component='span' color='#fff'>
                            {item.name}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default CustomCard;
