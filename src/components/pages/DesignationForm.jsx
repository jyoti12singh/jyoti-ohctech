
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";


const DesignationForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  DesignationForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
       
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Designation Name"
                    name="designationName"
                    type="text"
                    size="large"
                    value={values.designationName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.designationName && touched.designationName ? (
                        <span style={{ color: "red" }}>{errors.designationName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Designation Description"
                    name="designationDesc"
                    type="text"
                    size="large"
                    value={values.designationDesc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.designationDesc && touched.designationDesc ? (
                        <span style={{ color: "red" }}>
                          {errors.designationDesc}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
    
    
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Designation Code"
                    name="designationCode"
                    type="text"
                    size="large"
                    value={values.designationCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.designationCode && touched.designationCode ? (
                        <span style={{ color: "red" }}>{errors.designationCode}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" Enter the Designation Collar "
                    name="designationCollar"
                    type="text"
                    size="large"
                    value={values.designationCollar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.designationCollar && touched.designationCollar ? (
                        <span style={{ color: "red" }}>{errors.designationCollar}</span>
                      ) : null
                    }
                  />
                </Grid>
    
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default DesignationForm;

