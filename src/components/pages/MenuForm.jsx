import { Stack, Box } from "@mui/material";
import Input from "./Input";
import PropTypes from "prop-types";

 const MenuForm = ({values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit}) => {

    MenuForm.propTypes = {
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
        label="Menu Id"
        name="menuid"
        type="text"
        size="large"
        value={values.menuid}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={
         errors.menuid && touched.menuid ? (
           <span style={{ color: "red" }}>
             {errors.menuid}
           </span>
         ) : null
       }
        />
        <Input 
        label="Menu Name"
        name="menuname"
        type="text"
        size="large"
        value={values.menuname}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.menuname && touched.menuname ? (
           <span style={{ color: "red" }}>
             {errors.menuname}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="row" spacing={2}>
        <Input 
        label="Menu Description"
        name="menudescription"
        type="text"
        size="large"
        value={values.menudescription}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.menudescription && touched.menudescription ? (
           <span style={{ color: "red" }}>
             {errors.menudescription}
           </span>
         ) : null
       }
        />
        <Input 
        label="Menu Url"
        name="menuurl"
        type="text"
        size="large"
        value={values.menuurl}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={
         errors.menuurl && touched.menuurl ? (
           <span style={{ color: "red" }}>
             {errors.menuurl}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="row" spacing={2}>
    <Input 
    label="Parent Menu"
    name="parentmanu"
    type="text"
    size="large"
    value={values.parentmanu}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.parentmanu && touched.parentmanu ? (
           <span style={{ color: "red" }}>
             {errors.parentmanu}
           </span>
         ) : null
       }
    />
    <Input 
    label="Display Sequence"
    name="displaysequence"
    type="text"
    size="large"
    value={values.displaysequence}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.displaysequence && touched.displaysequence ? (
           <span style={{ color: "red" }}>
             {errors.displaysequence}
           </span>
         ) : null
       }
    />
</Stack>
    
    </Box>
  )
}

export default MenuForm;

