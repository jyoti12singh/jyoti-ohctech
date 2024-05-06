
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
                    name="DesignationName"
                    type="text"
                    size="large"
                    value={values.DesignationName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.DesignationName && touched.DesignationName ? (
                        <span style={{ color: "red" }}>{errors.DesignationName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Designation Description"
                    name="DesignationDespt"
                    type="text"
                    size="large"
                    value={values.DesignationDespt}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.DesignationDespt && touched.DesignationDespt ? (
                        <span style={{ color: "red" }}>
                          {errors.DesignationDespt}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
    
    
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Designation Code"
                    name="DesignationCode"
                    type="text"
                    size="large"
                    value={values.DesignationCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.DesignationCode && touched.DesignationCode ? (
                        <span style={{ color: "red" }}>{errors.DesignationCode}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" Enter the Designation Collar "
                    name="DesignationCollar"
                    type="text"
                    size="large"
                    value={values.DesignationCollar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.DesignationCollar && touched.DesignationCollar ? (
                        <span style={{ color: "red" }}>{errors.DesignationCollar}</span>
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

