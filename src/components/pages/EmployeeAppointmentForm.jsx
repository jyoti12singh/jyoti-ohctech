import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
// import TextArea from "./TextArea";
// import { useGridDate } from "ag-grid-react";

//import TextArea from "../TextArea";
import { useduedate } from 'react';

const EmployeeAppointmentForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
  EmployeeAppointmentForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

 const appointmenttype=["#","#","#"]
 const doctorname=["#","#"]
 const time=["#","#"]
 const status=["#","#"]
 
 

 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={0} justifyContent="center" alignItems="center"  >
        
          <Grid itemxs={2} sm={11}  justifyContent="center" alignItems="center">
            <FormControl Width={100*100}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                <SingleSelect
                    arr={appointmenttype}
                    label="Appointment Type"
                    name="appointmenttype"
                    value={values.appointmenttype}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "appointmenttype",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText= {
                      errors.appointmenttype && touched.appointmenttype ? (
                        <span style={{ color: "red" }}>{errors.appointmenttype}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"   alignItems="center">
                <Input
                    label="Appointment Date"
                    name="appointmentdate"
                    type="date"
                    size="large"
                    value={values.appointmentdate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.appointmentdate && touched.appointmentdate ? (
                        <span style={{ color: "red" }}>
                          {errors.appointmentdate}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
             
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                <SingleSelect
                    arr={doctorname}
                    label="Doctor Name"
                    name="doctorname"
                    value={values.doctorname}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "doctorname",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText= {
                      errors.doctorname && touched.doctorname ? (
                        <span style={{ color: "red" }}>{errors.doctorname}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                  <Input
                    label="Patient Name"
                    name="patientname"
                    type="text"
                    size="large"
                    value={values.patientname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.patientname && touched.patientname ? (
                        <span style={{ color: "red" }}>{errors.patientname}</span>
                      ) : null
                    }
                  />
                  
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={time}
                    label="Time"
                    name="time"
                    value={values.time}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "time",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.time && touched.time ? (
                        <span style={{ color: "red" }}>{errors.time}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={status}
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
                
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EmployeeAppointmentForm;

  