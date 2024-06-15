
import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";


const InjuryClassificationForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
  InjuryClassificationForm.propTypes = {
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
                    label="Injury Name"
                    name="injClassName"
                    type="text"
                    size="large"
                    value={values.injClassName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.injClassName && touched.injClassName ? (
                        <span style={{ color: "red" }}>{errors.injClassName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" Injury Description"
                    name="injClassDesc"
                    type="text"
                    size="large"
                    value={values.injClassDesc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.injClassDesc && touched.injClassDesc ? (
                        <span style={{ color: "red" }}>
                          {errors.injClassDesc}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Injury Code"
                    name="injClassCode"
                    type="text"
                    size="large"
                    value={values.injClassCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.injClassCode && touched.injClassCode ? (
                        <span style={{ color: "red" }}>{errors.injClassCode}</span>
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

export default InjuryClassificationForm;

  