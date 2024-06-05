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

const CheckupParameterGroup =({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    CheckupParameterGroup.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const Groupsection = ["Student", "Employee"];


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
       
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Group Title"
                    name="group"
                    type="text"
                    size="large"
                    value={values.group}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.group && touched.group ? (
                        <span style={{ color: "red" }}>{errors.group}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Group Number"
                    name="groupnumber"
                    type="text"
                    size="large"
                    value={values.groupnumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.groupnumber && touched.groupnumber ? (
                        <span style={{ color: "red" }}>
                          {errors.groupnumber}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Groupsection}
                    label="Select Group Section"
                    name="groupsec"
                    value={values.groupsec}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "groupsec",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.groupsec && touched.groupsec ? (
                        <span style={{ color: "red" }}>{errors.groupsec}</span>
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

export default CheckupParameterGroup;

