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
        name="roleName"
        type="text"
        size="large"
        value={values.roleName}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={
         errors.roleName && touched.roleName ? (
           <span style={{ color: "red" }}>
             {errors.roleName}
           </span>
         ) : null
       }
        />
        <Input 
        label="Role Description"
        name="roleDescription"
        type="text"
        size="large"
        value={values.roleDescription}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.roleDescription && touched.roleDescription ? (
           <span style={{ color: "red" }}>
             {errors.roleDescription}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="row" spacing={2}>
        <Input 
        label="Role Home Page"
        name="roleHomePage"
        type="text"
        size="large"
        value={values.roleHomePage}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.roleHomePage && touched.roleHomePage ? (
           <span style={{ color: "red" }}>
             {errors.roleHomePage}
           </span>
         ) : null
       }
        />
        <Input 
        label="Role code"
        name="roleCode"
        type="text"
        size="large"
        value={values.roleCode}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.roleCode && touched.roleCode ? (
           <span style={{ color: "red" }}>
             {errors.roleCode}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="row" spacing={2}>
    <Input 
    label="Icon Colour"
    name="iconColor"
    type="text"
    size="large"
    value={values.iconColor}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.iconColor && touched.iconColor ? (
           <span style={{ color: "red" }}>
             {errors.iconColor}
           </span>
         ) : null
       }
    />
    <Input 
    label="Icon Text"
    name="iconText"
    type="text"
    size="large"
    value={values.iconText}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.iconText && touched.iconText ? (
           <span style={{ color: "red" }}>
             {errors.iconText}
           </span>
         ) : null
       }
    />
</Stack>
    
    </Box>
  )
}

export default RoleForm;

