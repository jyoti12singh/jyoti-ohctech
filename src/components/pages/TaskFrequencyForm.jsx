
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const TaskFrequencyForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    TaskFrequencyForm.propTypes = {
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
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
         
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Frequency Name"
                    name="frequencyname"
                    type="text"
                    size="large"
                    value={values.frequencyname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.frequencyname && touched.frequencyname ? (
                        <span style={{ color: "red" }}>{errors.frequencyname}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Frequency Code"
                    name="frequencycode"
                    type="number"
                    size="large"
                    value={values.frequencycode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.frequencycode && touched.frequencycode ? (
                        <span style={{ color: "red" }}>
                          {errors.frequencycode}
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

export default TaskFrequencyForm;

