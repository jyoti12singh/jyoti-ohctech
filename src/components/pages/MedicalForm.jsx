import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const MedicalForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    MedicalForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const Default = ["Yes", "No"];
 

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>

          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Medical Form Name"
                    name="medicalname"
                    type="text"
                    size="large"
                    value={values.medicalname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.medicalname && touched.medicalname ? (
                        <span style={{ color: "red" }}>{errors.medicalname}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Medical Form Code"
                    name="medicalcode"
                    type="number"
                    size="large"
                    value={values.medicalcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.medicalcode && touched.medicalcode ? (
                        <span style={{ color: "red" }}>
                          {errors.medicalcode}
                        </span>
                      ) : null
                    }
                  />
                </Grid>

           
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Default}
                    label="Is QTY fixed"
                    name="QTY"
                    value={values.QTY}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "QTY",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.QTY && touched.QTY ? (
                        <span style={{ color: "red" }}>
                          {errors.QTY}
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

export default MedicalForm;

