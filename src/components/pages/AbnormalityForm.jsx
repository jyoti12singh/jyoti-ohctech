import Ohclogo from "./Ohclogo";
import { FormControl, Grid, TextField, Autocomplete } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";


const AbnormalityForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    AbnormalityForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  // const Medselect = ["Active", "Not Active"];
  // const isDefault = ["Yes", "No"];
  const multiselect = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Abnormality name"
                    name="AbnormalityName"
                    type="text"
                    size="large"
                    value={values.AbnormalityName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.AbnormalityName && touched.AbnormalityName? (
                        <span style={{ color: "red" }}>{errors.AbnormalityName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
              
            
            <MultipleSelect
              arr={multiselect}
              label="Wellness Programs"
              name="WellnessPrograms"
              value={values.WellnessPrograms}
              // onChange={handleChange}
              onChange={(event, newValue) => {
                const syntheticEvent = {
                  target: {
                    name: 'WellnessPrograms',
                    value: newValue,
                  },
                };
                handleChange(syntheticEvent);
              }}
              onBlur={handleBlur}
            />

            {/* <Autocomplete
            // disablePortal
            id="combo-box-demo"
            options={homeselect}
            label="Ohc"
            name="ohc"
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Ohc" />}
            value={values.ohc}
            onChange={(event, newValue) => {
              const syntheticEvent = {
                target: {
                  name: 'ohc',
                  value: newValue,
                },
              };
              handleChange(syntheticEvent);
            }}
          /> */}

                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};


export default AbnormalityForm;
