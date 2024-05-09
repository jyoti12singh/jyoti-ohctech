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


const RefferedByForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    RefferedByForm.propTypes = {
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
                    label="Reffered By"
                    name="RefferedBy"
                    type="text"
                    size="large"
                    value={values.RefferedBy}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.RefferedBy && touched.RefferedBy? (
                        <span style={{ color: "red" }}>{errors.RefferedBy}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Description"
                    name="Description"
                    type="text"
                    size="large"
                    value={values.Description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Description && touched.Description? (
                        <span style={{ color: "red" }}>
                          {errors.Description}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Remarks"
                    name="Remarks"
                    type="text"
                    size="large"
                    value={values.Remarks}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Remarks && touched.Remarks ? (
                        <span style={{ color: "red" }}>{errors.Remarks}</span>
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


export default RefferedByForm;
