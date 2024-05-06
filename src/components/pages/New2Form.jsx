import { Stack, Box } from "@mui/material";
import Input from "../common/Input";
import PropTypes from "prop-types";

 const New2Form = ({values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,}) => {


    New2Form.propTypes = {
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
         top: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "10px",
        gap: "12px",
        width: "100%",
        height:"20%",
      }}
      onSubmit={handleSubmit}
    >

    <Stack direction="column" spacing={1}>
        <Input 
        label="Enter Employee Cadre name"
        name="Employercadname"
        type="text"
        size="large"
        value={values.Employercadname}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.Employercadname && touched.Employercadname ? (
           <span style={{ color: "red" }}>
             {errors.Employercadname}
           </span>
         ) : null
       }
        />
        <Input 
        label="Enter Remarks"
        name="remark"
        type="text"
        size="large"
        value={values.remark}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.remark && touched.remark ? (
           <span style={{ color: "red" }}>
             {errors.remark}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="column" spacing={1}>
        <Input 
        label="Enter Medical Claim Limit"
        name="claimL"
        type="text"
        size="large"
        value={values.claimL}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.claimL && touched.claimL ? (
           <span style={{ color: "red" }}>
             {errors.claimL}
           </span>
         ) : null
       }
        />
    </Stack>
    

    
    </Box>
  )
}

export default New2Form;