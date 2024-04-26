import { Box, Stack,TextField,MenuItem } from "@mui/material"

 const OhcUser = () => {
  return (
     <Box
     component="form"
     sx={{
        // top: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "10px",
        gap: "10px",
        width: "100%",
      }}
      spacing={2}
     >
     <Stack direction='row' spacing={2}>
     <TextField
     sx={{ width: "250px" }}
     label="Employee"
     name="employee"
     size="large"
     id="outlined-basic"
     variant="outlined"
    //  value={values.ohcname}
    //  onChange={handleChange}
    //  onBlur={handleBlur}
     // helperText={errors.ohcname}
    //  helperText={
    //    errors.ohcname && touched.ohcname ? (
    //      <span style={{ color: "red" }}>
    //        {errors.ohcname}
    //      </span>
    //    ) : null
    //  }
   />
   <TextField
   sx={{ width: "250px" }}
   label="User Name"
   name="username"
   size="large"
   id="outlined-basic"
   variant="outlined"
  //  value={values.ohcname}
  //  onChange={handleChange}
  //  onBlur={handleBlur}
   // helperText={errors.ohcname}
  //  helperText={
  //    errors.ohcname && touched.ohcname ? (
  //      <span style={{ color: "red" }}>
  //        {errors.ohcname}
  //      </span>
  //    ) : null
  //  }
 />
     </Stack>
     <Stack direction='row' spacing={2}>
     <TextField
     sx={{ width: "250px" }}
     label="Password"
     name="password"
     size="large"
     id="outlined-basic"
     variant="outlined"
    //  value={values.ohcname}
    //  onChange={handleChange}
    //  onBlur={handleBlur}
     // helperText={errors.ohcname}
    //  helperText={
    //    errors.ohcname && touched.ohcname ? (
    //      <span style={{ color: "red" }}>
    //        {errors.ohcname}
    //      </span>
    //    ) : null
    //  }
   />
   <TextField
   sx={{ width: "250px" }}
   label="Confirm Password"
   name="confirmpass"
   size="large"
   id="outlined-basic"
   variant="outlined"
  //  value={values.ohcname}
  //  onChange={handleChange}
  //  onBlur={handleBlur}
   // helperText={errors.ohcname}
  //  helperText={
  //    errors.ohcname && touched.ohcname ? (
  //      <span style={{ color: "red" }}>
  //        {errors.ohcname}
  //      </span>
  //    ) : null
  //  }
 />
     </Stack>
     <Stack direction='row' spacing={2}>
     <TextField
     sx={{ width: "250px" }}
     label="Vendor"
     name="vendor"
     size="large"
     id="outlined-basic"
     variant="outlined"
     select
    //  value={values.ohccategory}
    //  onChange={handleChange}
    //  onBlur={handleBlur}
    //  helperText={
    //    errors.ohccategory && touched.ohccategory ? (
    //      <span style={{ color: "red" }}>
    //        {errors.ohccategory}
    //      </span>
    //    ) : null
    //  }
   >
     <MenuItem value="Ohc center">Ohc center</MenuItem>
     <MenuItem value="Ambulance">Ambulance</MenuItem>
     <MenuItem value="First Aid Box">First Aid Box</MenuItem>
     <MenuItem value="Other">Other</MenuItem>
     </TextField>
     <TextField
     sx={{ width: "250px" }}
     label="Status"
     name="status"
     size="large"
     id="outlined-basic"
     variant="outlined"
     select
    //  value={values.ohccategory}
    //  onChange={handleChange}
    //  onBlur={handleBlur}
    //  helperText={
    //    errors.ohccategory && touched.ohccategory ? (
    //      <span style={{ color: "red" }}>
    //        {errors.ohccategory}
    //      </span>
    //    ) : null
    //  }
   >
     <MenuItem value="Ohc center">Ohc center</MenuItem>
     <MenuItem value="Ambulance">Ambulance</MenuItem>
     <MenuItem value="First Aid Box">First Aid Box</MenuItem>
     <MenuItem value="Other">Other</MenuItem>
     </TextField>
     </Stack>
     </Box>
  )
}

export default OhcUser;