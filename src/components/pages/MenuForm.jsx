import { Stack, Box } from "@mui/material";
import Input from "../common/Input";
import PropTypes from "prop-types";

 const MenuForm = ({values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {

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
    onSubmit={handleSubmit}
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
      component="form"
    >

    <Stack direction="row" spacing={2}>
        
        <Input 
        label="Menu Name"
        name="menuName"
        type="text"
        size="large"
        value={values.menuName}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={
         errors.menuName && touched.menuName ? (
           <span style={{ color: "red" }}>
             {errors.menuName}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="row" spacing={2}>
        <Input 
        label="Menu Description"
        name="menuDescription"
        type="text"
        size="large"
        value={values.menuDescription}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.menuDescription && touched.menuDescription ? (
           <span style={{ color: "red" }}>
             {errors.menuDescription}
           </span>
         ) : null
       }
        />
        <Input 
        label="Menu Url"
        name="menuUrl"
        type="text"
        size="large"
        value={values.menuUrl}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={
         errors.menuUrl && touched.menuUrl ? (
           <span style={{ color: "red" }}>
             {errors.menuUrl}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="row" spacing={2}>
    <Input 
    label="Parent Menu"
    name="parentMenu"
    type="number"
    size="large"
    value={values.parentMenu}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.parentMenu && touched.parentMenu ? (
           <span style={{ color: "red" }}>
             {errors.parentMenu}
           </span>
         ) : null
       }
    />
    <Input 
    label="Display Sequence"
    name="displaySequence"
    type="text"
    size="large"
    value={values.displaySequence}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.displaySequence && touched.displaySequence ? (
           <span style={{ color: "red" }}>
             {errors.displaySequence}
           </span>
         ) : null
       }
    />
</Stack>
    
    </Box>
  )
}

export default MenuForm;

