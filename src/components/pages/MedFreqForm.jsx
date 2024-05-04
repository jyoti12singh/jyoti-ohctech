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


const MedFreqForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  MedFreqForm.propTypes = {
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
                    label="Enter Medicine frequency"
                    name="MedicineFrequency"
                    type="text"
                    size="large"
                    value={values.MedicineFrequency}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.MedicineFrequency && touched.MedicineFrequency? (
                        <span style={{ color: "red" }}>{errors.MedicineFrequency}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Description"
                    name="MedicineDescription"
                    type="text"
                    size="large"
                    value={values.MedicineDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.MedicineDescription && touched.MedicineDescription ? (
                        <span style={{ color: "red" }}>
                          {errors.MedicineDescription}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="calculatedCity"
                    name="calculatedCity"
                    type="text"
                    size="large"
                    value={values.calculatedCity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.calculatedCity && touched.calculatedCity ? (
                        <span style={{ color: "red" }}>{errors.calculatedCity}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="displayOrder"
                    name="displayOrder"
                    type="text"
                    size="large"
                    value={values.displayOrder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.displayOrder && touched.displayOrder ? (
                        <span style={{ color: "red" }}>{errors.displayOrder}</span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Medselect}
                    label="status"
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
                  <SingleSelect
                    arr={isDefault}
                    label="select default"
                    name="isDefault"
                    value={values.isDefault}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "isDefault",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.isDefault && touched.isDefault ? (
                        <span style={{ color: "red" }}>{errors.isDefault}</span>
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


export default MedFreqForm;
