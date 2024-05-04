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


const AddDocDetailForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    AddDocDetailForm.propTypes = {
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
                    label="Enter Doctor Name"
                    name="DoctorName"
                    type="text"
                    size="large"
                    value={values.DoctorName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.DoctorName && touched.DoctorName? (
                        <span style={{ color: "red" }}>{errors.DoctorName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Medselect}
                    label="Dcotor Emp Code"
                    name="statusType"
                    value={values.statusType}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "statusType",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.statusType && touched.statusType ? (
                        <span style={{ color: "red" }}>{errors.statusType}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Doctor Details"
                    name="DoctorDetails"
                    type="text"
                    size="large"
                    value={values.DoctorDetails}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.DoctorDetails && touched.DoctorDetails ? (
                        <span style={{ color: "red" }}>
                          {errors.DoctorDetails}
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


export default AddDocDetailForm;
