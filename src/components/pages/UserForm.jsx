// import { CheckBox } from "@mui/icons-material";
import { Box, Stack,Grid,FormControl } from "@mui/material"
import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; 
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography'
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
      <Grid  container spacing={2} justifyContent="center" alignItems="center" sx={{width:"400px"}}>
          <Grid item xs={12}  justifyContent="center" alignItems="center">
             <FormControl fullWidth>
              <Grid lg={12} container spacing={2} justifyContent="center" alignItems="center">
                <Grid item  xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                  // sx={{ width: "150px" }}
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
                </Grid>
                <Grid item  xs={12} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                  // sx={{ width: "150px" }}
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
                </Grid>
                <Grid item  xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <TextField
                  // sx={{ width: "250px" }}
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
                      <Grid sx={{ cursor: "pointer" }}>
                        <Avatar
                          variant="circular"
                          // sx={{ bgcolor: "cornflowerblue" }}
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </Avatar>
                      </Grid>
                    ),
                  }}

                />
                </Grid>
                <Grid item  xs={12} container spacing={1} justifyContent="center" alignItems="center">
                <TextField
                  // sx={{ width: "250px" }}
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
                      <Grid  sx={{ cursor: "pointer" }}>
                        <Avatar
                          variant="circular"
                          // sx={{ bgcolor: "cornflowerblue" }}
                          onClick={handleClickShowConfPassword}
                        >
                          {showConPassword ? <VisibilityOff /> : <Visibility />}
                        </Avatar>
                      </Grid>
                    ),
                  }}
                />
                </Grid>
              
                <Grid item  xs={12} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                  // sx={{ width: "150px" }}
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
                </Grid>
                <Grid item  xs={12} container spacing={1} justifyContent="center" alignItems="center">
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
                </Grid>
                <Grid item  xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <MultiCheckbox
                  // sx={{ width: "150px" }}

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
                </Grid>

                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                <MultiCheckbox
                  // sx={{ width: "150px" }}

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
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
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