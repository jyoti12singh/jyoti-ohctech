import Ohclogo from "./Ohclogo";
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";


const RefferalForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    RefferalForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  const Medselect = ["Active", "Not Active"];
  const isDefault = ["Yes", "No"];



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
                    name="RefferalPointName"
                    type="text"
                    size="large"
                    value={values.RefferalPointName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.RefferalPointName && touched.RefferalPointName? (
                        <span style={{ color: "red" }}>{errors.RefferalPointName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Specialist"
                    name="Specialist"
                    type="text"
                    size="large"
                    value={values.Specialist}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Specialist && touched.Specialist? (
                        <span style={{ color: "red" }}>
                          {errors.Specialist}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Hospital Name"
                    name="HospitalName"
                    type="text"
                    size="large"
                    value={values.HospitalName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.HospitalName && touched.HospitalName ? (
                        <span style={{ color: "red" }}>{errors.HospitalName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Address"
                    name="Address"
                    type="text"
                    size="large"
                    value={values.Address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Address && touched.Address ? (
                        <span style={{ color: "red" }}>{errors.Address}</span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Contact Detail"
                    name="ContactDetail"
                    type="text"
                    size="large"
                    value={values.ContactDetail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.ContactDetail && touched.ContactDetail ? (
                        <span style={{ color: "red" }}>{errors.ContactDetail}</span>
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


export default RefferalForm;
