import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";

const HealthReportableParameterForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    HealthReportableParameterForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

 //const itemtypeselect=["Capital/non consumeble instruments","other"]
 //const itemnameSelect=["Active","Not Active"]
 //const itemSelect=["Yes","No"]
 
 return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center"  sx={{ width: 320 }} >
        
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Key Parameter Id"
                    name="kid"
                    type="text"
                    size="large"
                    value={values.kid}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.kid && touched.kid ? (
                        <span style={{ color: "red" }}>{errors.kid}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" Key Parameter Name"
                    name="parametername"
                    type="text"
                    size="large"
                    value={values.parametername}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.parametername && touched.parametername ? (
                        <span style={{ color: "red" }}>
                          {errors.parametername}
                        </span>
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

export default HealthReportableParameterForm;

  