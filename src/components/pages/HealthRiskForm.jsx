import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";


const HealthRiskForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    HealthRiskForm.propTypes = {
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
        <Grid container spacing={2} justifyContent="center" alignItems="center"  sx={{ width: 320 }} >
        
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Health Risk Name"
                    name="HealthRiskName"
                    type="text"
                    size="large"
                    value={values.HealthRiskName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.HealthRiskName && touched.HealthRiskName ? (
                        <span style={{ color: "red" }}>{errors.HealthRiskName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Health Advice Category"
                    name="HealthAdviceCategory"
                    type="text"
                    size="large"
                    value={values.HealthAdviceCategory}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.HealthAdviceCategory && touched.HealthAdviceCategory ? (
                        <span style={{ color: "red" }}>
                          {errors.HealthAdviceCategory}
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

export default HealthRiskForm;

  