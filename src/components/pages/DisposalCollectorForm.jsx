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


const DisposalCollectorForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    DisposalCollectorForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  const Medselect = ["NA", "NNN","AAA"];



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Collector Name"
                    name="CollectorName"
                    type="text"
                    size="large"
                    value={values.CollectorName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.CollectorName && touched.CollectorName? (
                        <span style={{ color: "red" }}>{errors.CollectorName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Medselect}
                    label="Collecting OHC"
                    name="CollectingOHC"
                    value={values.CollectingOHC}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "CollectingOHC",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.CollectingOHC && touched.CollectingOHC ? (
                        <span style={{ color: "red" }}>{errors.CollectingOHC}</span>
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


export default DisposalCollectorForm;
