import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";


const InjuryTypeForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
  InjuryTypeForm.propTypes = {
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
        <Grid container spacing={2}    justifyContent="center" alignItems="center" sx={{width:300}}>
          
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2}  justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Injury  Name"
                    name="injuryTypeName"
                    type="text"
                    size="large"
                    value={values.  injuryTypeName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.injuryTypeName && touched.injuryTypeName? (
                        <span style={{ color: "red" }}>{errors.injuryTypeName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Injury  Description"
                    name="injuryTypeDesc"
                    type="text"
                    size="large"
                    value={values.injuryTypeDesc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.injuryTypeDesc && touched.injuryTypeDesc ? (
                        <span style={{ color: "red" }}>
                          {errors.injuryTypeDesc}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Injury  Code"
                    name="injuryTypeCode"
                    type="text"
                    size="large"
                    value={values.injuryTypeCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.injuryTypeCode && touched.injuryTypeCode ? (
                        <span style={{ color: "red" }}>{errors.injuryTypeCode}</span>
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

export default InjuryTypeForm;

