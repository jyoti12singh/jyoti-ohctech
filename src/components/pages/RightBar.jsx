import Box from "@mui/material/Box";

const RightBar = () => {
  return (
    <Box
      bgcolor="#E0AED0"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      
    >
      Right
    </Box>
  );
};

export default RightBar;
