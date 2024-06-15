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
        name="empCadre"
        type="text"
        size="large"
        value={values.empCadre}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.empCadre && touched.empCadre ? (
           <span style={{ color: "red" }}>
             {errors.empCadre}
           </span>
         ) : null
       }
        />
        <Input 
        label="Enter Remarks"
        name="remarks"
        type="text"
        size="large"
        value={values.remarks}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.remarks && touched.remarks ? (
           <span style={{ color: "red" }}>
             {errors.remarks}
           </span>
         ) : null
       }
        />
    </Stack>
    <Stack direction="column" spacing={1}>
        <Input 
        label="Enter Medical Claim Limit"
        name="medicalClaimLimit"
        type="number"
        size="large"
        value={values.medicalClaimLimit}
     onChange={handleChange}
     onBlur={handleBlur}
     helperText={
         errors.medicalClaimLimit && touched.medicalClaimLimit ? (
           <span style={{ color: "red" }}>
             {errors.medicalClaimLimit}
           </span>
         ) : null
       }
        />
    </Stack>
    

    
    </Box>
  )
}

export default New2Form;