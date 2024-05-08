import Ohclogo from "./Ohclogo";
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const DiagnosisBSMForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    DiagnosisBSMForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const DiagnosisName = ["#BOTH BONES LEFT FOREARM", "......"];
  const bodysystem = ["......", "........", "......."];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
         
          <Grid item xs={12} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={DiagnosisName}
                    label="Diagnosis Name"
                    name="DiagnosisName"
                    value={values.DiagnosisName}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "DiagnosisName",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.DiagnosisName && touched.DiagnosisName ? (
                        <span style={{ color: "red" }}>{errors.DiagnosisName}</span>
                      ) : null
                    }
                  />
                </Grid>

               
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={bodysystem}
                    label="Slect Body System"
                    name="BodySystem"
                    value={values.BodySystem}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "BodySystem",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.BodySystem && touched.BodySystem ? (
                        <span style={{ color: "red" }}>
                          {errors.BodySystem}
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

export default DiagnosisBSMForm;

