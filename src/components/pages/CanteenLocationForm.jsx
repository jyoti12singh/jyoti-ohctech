
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const CanteenLocationForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  CanteenLocationForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const Type = ["#", "##"];
  

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
      
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Canteen Location"
                    name="location"
                    type="text"
                    size="large"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.location && touched.location ? (
                        <span style={{ color: "red" }}>{errors.location}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Canteen Code"
                    name="code"
                    type="number"
                    size="large"
                    value={values.code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.code && touched.code ? (
                        <span style={{ color: "red" }}>
                          {errors.code}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
               
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Type}
                    label="Select Type"
                    name="type"
                    value={values.type}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "type",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.type && touched.type ? (
                        <span style={{ color: "red" }}>{errors.type}</span>
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

export default CanteenLocationForm;

