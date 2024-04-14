import { Stack, Box } from "@mui/material";
import Input from "./Input";
import PropTypes from "prop-types";

 const RoleForm = ({values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,}) => {


    RoleForm.propTypes = {
      values: PropTypes.object.isRequired,
      touched: PropTypes.object.isRequired,
      errors: PropTypes.object.isRequired,
      handleBlur: PropTypes.func.isRequired,
      handleChange: PropTypes.func.isRequired,
      setFieldValue: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired,
    };


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
      onSubmit={handleSubmit}
    >

    <Stack direction="row" spacing={2}>
        <Input 
        label="Role Name"
        name="rolename"
        type="text"
        size="large"
        value={values.rolename}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.rolename && touched.rolename ? (
           <span style={{ color: "red" }}>
             {errors.rolename}
           </span>
         ) : null
       }
        />
        <Input 
        label="Role Description"
        name="roledes"
        type="text"
        size="large"
        value={values.roledes}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.roledes && touched.roledes ? (
           <span style={{ color: "red" }}>
             {errors.roledes}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="row" spacing={2}>
        <Input 
        label="Role Home Page"
        name="homepage"
        type="text"
        size="large"
        value={values.homepage}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.homepage && touched.homepage ? (
           <span style={{ color: "red" }}>
             {errors.homepage}
           </span>
         ) : null
       }
        />
        <Input 
        label="Role code"
        name="rolecode"
        type="number"
        size="large"
        value={values.rolecode}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.rolecode && touched.rolecode ? (
           <span style={{ color: "red" }}>
             {errors.rolecode}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="row" spacing={2}>
    <Input 
    label="Icon Colour"
    name="iconcolor"
    type="text"
    size="large"
    value={values.iconcolor}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.iconcolor && touched.iconcolor ? (
           <span style={{ color: "red" }}>
             {errors.iconcolor}
           </span>
         ) : null
       }
    />
    <Input 
    label="Icon Text"
    name="icontext"
    type="text"
    size="large"
    value={values.icontext}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.icontext && touched.icontext ? (
           <span style={{ color: "red" }}>
             {errors.icontext}
           </span>
         ) : null
       }
    />
</Stack>
    
    </Box>
  )
}

export default RoleForm;

