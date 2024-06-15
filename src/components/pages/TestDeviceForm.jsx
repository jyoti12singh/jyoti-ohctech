import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";
//import Select from "@mui/material";
const TestDeviceForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    TestDeviceForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  //const ohcselect = ["Student", "Employee"];
 // const adroute=["ICU","Personal Clinic","Government Hospital"];
  const dename=["AED","Blood Pressure Monitors","Nebulizers","Oxygen canisters"];
 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">

          <Grid item xs={12} sm={8} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter Test Categories Name"
                    name="testcatagory"
                    type="text"
                    size="large"
                    value={values.testcatagory}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.testcatagory && touched.testcatagory? (
                        <span style={{ color: "red" }}>{errors.testcatagory}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={dename}
                    label="Device Name"
                    name="devicename"
                    value={values.devicename}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "devicename",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.devicename && touched.devicename ? (
                        <span style={{ color: "red" }}>{errors.devicename}</span>
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

export default TestDeviceForm;
