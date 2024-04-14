// import { CheckBox } from "@mui/icons-material";
import { Box, Stack } from "@mui/material"
import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; 
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography'
import PropTypes from "prop-types";
import Input from "./Input";
import SingleSelect from "./SingleSelect";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import MultiCheckbox from "./MultiCheckbox";

const UserForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
})=> {

  UserForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfPassword = () => setShowConPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
   
    
    
    const ohc = ["Ambulance","Angul"];
    const role = ["Admin","Doctor"];
    const vendorarr = ["JSPL","Komenthra corporotion","TVS Digital Pte Limited","TVS Holdings Limited"];
    const statusarr  = ["Active","Inactive"];
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
        gap: "12px",
        width: "100%",
      }}
      spacing={2}
      onSubmit={handleSubmit}
     >
     <Stack direction='row' spacing={2}>
     <Input
     sx={{ width: "250px" }}
     label="Employee"
     name="employee"
     type="text"
     size="large"
     id="outlined-basic"
     variant="outlined"
     value={values.employee}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.employee && touched.employee ? (
           <span style={{ color: "red" }}>
             {errors.employee}
           </span>
         ) : null
       }
   />
   <Input
   sx={{ width: "250px" }}
   label="User Name"
   name="username"
   type="text"
   size="large"
   id="outlined-basic"
   variant="outlined"
   value={values.username}
   onChange={handleChange}
   onBlur={handleBlur}
   helperText={
     errors.username && touched.username ? (
       <span style={{ color: "red" }}>
         {errors.username}
       </span>
     ) : null
   }
 />
     </Stack>
     <Stack direction='row' spacing={2}>
     <TextField
     sx={{ width: "250px" }}
     label="Password"
     name="password"
     size="large"
    //  type="password"
     id="outlined-basic"
     variant="outlined"
     value={values.password}
     onChange={handleChange}
     onBlur={handleBlur}
     type={showPassword ? 'text' : 'password'}
     // helperText={errors.ohcname}
     helperText={
       errors.password && touched.password ? (
         <span style={{ color: "red" }}>
           {errors.password}
         </span>
       ) : null
     }
    //  endAdornment={
    //   <InputAdornment position="end">
    //     <IconButton
    //       onClick={handleClickShowPassword}
    //       edge="end"
    //     >
    //       {showPassword ? <VisibilityOff /> : <Visibility />}
    //     </IconButton>
    //   </InputAdornment>
    // }
    
    InputProps={{
      endAdornment: (
        <Box sx={{ cursor: "pointer" }}>
          <Avatar
            variant="circular"
            // sx={{ bgcolor: "cornflowerblue" }}
            onClick={handleClickShowPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </Avatar>
        </Box>
      ),
    }}

   />
   <TextField
   sx={{ width: "250px" }}
   label="Confirm Password"
   name="confirmpass"
   size="large"
  //  type="password"
  type={showConPassword ? 'text' : 'password'}
   id="outlined-basic"
   variant="outlined"
   value={values.confirmpass}
   onChange={handleChange}
   onBlur={handleBlur}
   helperText={
     errors.confirmpass && touched.confirmpass ? (
       <span style={{ color: "red" }}>
         {errors.confirmpass}
       </span>
     ) : null
   }

   InputProps={{
    endAdornment: (
      <Box sx={{ cursor: "pointer" }}>
        <Avatar
          variant="circular"
          // sx={{ bgcolor: "cornflowerblue" }}
          onClick={handleClickShowConfPassword}
        >
          {showConPassword ? <VisibilityOff /> : <Visibility />}
        </Avatar>
      </Box>
    ),
  }}
 />
     </Stack>

     <Stack direction='row' spacing={2}>

     <SingleSelect
              arr={vendorarr}
              label="Vendor"
              name="vendor"
              value={values.vendor}
              onChange={(event, newValue) => {
                const syntheticEvent = {
                  target: {
                    name: 'vendor', 
                    value: newValue, 
                  },
                };
                handleChange(syntheticEvent); 
              }}
              onBlur={handleBlur}
              type="text"
              helpertext={
                errors.vendor && touched.vendor ? (
                  <span style={{ color: "red" }}>{errors.vendor}</span>
                ) : null
              }
            />
          
            <SingleSelect
              arr={statusarr}
              label="Status"
              name="status"
              value={values.status}
              onChange={(event, newValue) => {
                const syntheticEvent = {
                  target: {
                    name: 'status', 
                    value: newValue, 
                  },
                };
                handleChange(syntheticEvent); 
              }}
              onBlur={handleBlur}
              type="text"
              helpertext={
                errors.status && touched.status ? (
                  <span style={{ color: "red" }}>{errors.status}</span>
                ) : null
              }
            />
    
      </Stack>
      <Stack direction="row" spacing={2}>
      <MultiCheckbox
        arr={role}
        label="User Role"
        name="roles"
        value={values.roles}
        // onChange={handleChange}
        onChange={(event, newValue) => {
          const syntheticEvent = {
            target: {
              name: 'roles', 
              value: newValue, 
            },
          };
          handleChange(syntheticEvent); 
        }}
        onBlur={handleBlur}
      />
      <MultiCheckbox
        arr={ohc}
        label="OHC Type"
        name="ohcs"
        value={values.ohcs}
        // onChange={handleChange}
        onChange={(event, newValue) => {
          const syntheticEvent = {
            target: {
              name: 'ohcs', 
              value: newValue, 
            },
          };
          handleChange(syntheticEvent); 
        }}
        onBlur={handleBlur}
      />
      </Stack>
    

     </Box>
  )
}

export default UserForm;




// <Box
// sx={{
//  display: "flex",
//  // flexDirection: "row",
//  justifyContent: "left",
//  // justifyItems: "center",
//  // gap: "25px",
// }}
// >
//  <FormGroup 
//   sx={{
//    width: "256px",
//    display:'flex',
//    justifyContent:'flex-start',
//    // justifyItems: "left",
//   }}
//  >
//  <Typography variant="p" component="h2">
//   User Role
//  </Typography>
//  {
//    role.map((role,index)=>{
//      return(
//        <FormControlLabel sx={{margin:'0px'}}  key={index} control={<Checkbox  />} label={role} />
//      )
//    })
//  }
//  </FormGroup>

//  <FormGroup
//  sx={{
//    width: "256px",
//    display:'flex',
//    justifyContent:'flex-start',
//    // justifyItems: "left",
//    margin:'0px'
//   }}
//  >
//  <Typography sx={{marginLeft:'2px'}} variant="p" component="h2">
//   OHC Type
//  </Typography>
//  {
//    ohc.map((ohc,index)=>{
//      return(
//        <FormControlLabel sx={{margin:'0px'}} key={index} control={<Checkbox  />} label={ohc} />
//      )
//    })
//  }
//  </FormGroup>
// </Box>