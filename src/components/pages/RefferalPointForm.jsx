// import Ohclogo from "./Ohclogo";
import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
// import SingleSelect from "../common/SingleSelect"
// import MultipleSelect from "../common/MultipleSelect";
// import { InputLabel, MenuItem, Select } from "@mui/material";
// import Autocomplete from "@mui/material/Autocomplete";
// import { useState } from "react";
// import MultiCheckbox from "./MultiCheckbox";


const RefferalPointForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
  RefferalPointForm.propTypes = {
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
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Refferal Point Name"
                    name="referralPointName"
                    type="text"
                    size="large"
                    value={values.referralPointName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.referralPointName && touched.referralPointName? (
                        <span style={{ color: "red" }}>{errors.referralPointName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Specialist"
                    name="city"
                    type="text"
                    size="large"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.city && touched.city? (
                        <span style={{ color: "red" }}>
                          {errors.city}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Hospital Name"
                    name="hospitalName"
                    type="text"
                    size="large"
                    value={values.hospitalName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.hospitalName && touched.hospitalName ? (
                        <span style={{ color: "red" }}>{errors.hospitalName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Address"
                    name="address"
                    type="text"
                    size="large"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.address && touched.address ? (
                        <span style={{ color: "red" }}>{errors.address}</span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Contact Detail"
                    name="contactDetail"
                    type="text"
                    size="large"
                    value={values.contactDetail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.contactDetail && touched.contactDetail ? (
                        <span style={{ color: "red" }}>{errors.contactDetail}</span>
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


export default RefferalPointForm;
