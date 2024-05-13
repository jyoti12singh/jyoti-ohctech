import Ohclogo from "./Ohclogo";
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";


const AppointmentForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    AppointmentForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  const Medselect = ["AAA", "BBB","CCC"];
//   const isDefault = ["Yes", "No"];



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Slot Start"
                    name="SlotStart"
                    type="time"
                    size="large"
                    value={values.SlotStart}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.SlotStart && touched.SlotStart? (
                        <span style={{ color: "red" }}>{errors.SlotStart}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Slot End"
                    name="SlotEnd"
                    type="time"
                    size="large"
                    value={values.SlotEnd}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.SlotEnd && touched.SlotEnd? (
                        <span style={{ color: "red" }}>
                          {errors.SlotEnd}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="No Of Appointment"
                    name="NoOfAppointment"
                    type="number"
                    size="large"
                    value={values.NoOfAppointment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.NoOfAppointment && touched.NoOfAppointment ? (
                        <span style={{ color: "red" }}>{errors.NoOfAppointment}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={Medselect}
                    label="Appointments Type"
                    name="AppointmentsType"
                    value={values.AppointmentsType}
                    onChange={(event, newValue) => {
                        const syntheticEvent = {
                        target: {
                            name: "AppointmentsType",
                            value: newValue,
                        },
                        };
                        handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                        errors.AppointmentsType && touched.AppointmentsType ? (
                        <span style={{ color: "red" }}>{errors.AppointmentsType}</span>
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


export default AppointmentForm;
