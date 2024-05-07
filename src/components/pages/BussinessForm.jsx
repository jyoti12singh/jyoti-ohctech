import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";


const BussinessForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
  BussinessForm.propTypes = {
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
                    label="Bussiness Name"
                    name="buName"
                    type="text"
                    size="large"
                    value={values.buName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.buName && touched.buName ? (
                        <span style={{ color: "red" }}>{errors.buName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" Bussiness head name"
                    name="buHeadName"
                    type="text"
                    size="large"
                    value={values.buHeadName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.buHeadName && touched.buHeadName ? (
                        <span style={{ color: "red" }}>
                          {errors.buHeadName}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Bussiness Email"
                    name="buEmail"
                    type="text"
                    size="large"
                    value={values.buEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.buEmail && touched.buEmail ? (
                        <span style={{ color: "red" }}>{errors.buEmail}</span>
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

export default BussinessForm;

  