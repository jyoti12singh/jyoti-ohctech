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
                    name="referredBy"
                    type="text"
                    size="large"
                    value={values.referredBy}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.referredBy && touched.referredBy? (
                        <span style={{ color: "red" }}>{errors.referredBy}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Description"
                    name="description"
                    type="text"
                    size="large"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.description && touched.description? (
                        <span style={{ color: "red" }}>
                          {errors.description}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Remarks"
                    name="remarks"
                    type="text"
                    size="large"
                    value={values.remarks}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.remarks && touched.remarks ? (
                        <span style={{ color: "red" }}>{errors.remarks}</span>
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
