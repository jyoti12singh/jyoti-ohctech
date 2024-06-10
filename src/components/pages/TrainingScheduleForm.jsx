import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";
import TrainingScheduleList from "./TrainingScheduleList";

const TrainingScheduleForm =({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    TrainingScheduleForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const statusselect = ["ACTIVE", "INACTIVE"];
  const programselect = ["FIRE SAFETY TRAINING", "First Aid Trainig", "FITNESS", "IMS","OVERWEIGHT","Tb Free Workplace"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:570}}>
         
         <Grid item xs={12}  justifyContent="center" alignItems="center">
           <FormControl fullWidth>
             <Grid  container  spacing={2} justifyContent="center" alignItems="center">
               <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={programselect}
                    label="Program Name"
                    name="programName"
                    value={values.programName}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "programName",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.programName && touched.programName ? (
                        <span style={{ color: "red" }}>
                          {errors.programName}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="From Date"
                    name="fromDate"
                    type="date"
                    size="large"
                    value={values.fromDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.fromDate && touched.fromDate ? (
                        <span style={{ color: "red" }}>
                          {errors.fromDate}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="To Date"
                    name="toDate"
                    type="date"
                    size="large"
                    value={values.toDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.toDate && touched.toDate ? (
                        <span style={{ color: "red" }}>{errors.toDate}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Trainer Name"
                    name="trainerName"
                    type="text"
                    size="large"
                    value={values.trainerName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.trainerName && touched.trainerName ? (
                        <span style={{ color: "red" }}>{errors.trainerName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Location"
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
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={statusselect}
                    label="Status"
                    name="status"
                    value={values.status}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "status",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.status && touched.status ? (
                        <span style={{ color: "red" }}>{errors.status}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Remark"
                    name="remark"
                    type="text"
                    size="large"
                    value={values.remark}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.remark && touched.remark ? (
                        <span style={{ color: "red" }}>{errors.remark}</span>
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

export default TrainingScheduleForm;

