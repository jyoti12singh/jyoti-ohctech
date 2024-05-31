import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
import TextArea from "./TextArea";
import { useGridDate } from "ag-grid-react";

//import TextArea from "../TextArea";
import { useduedate } from 'react';

const ChronicIllnessForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    ChronicIllnessForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

 const illnessselect=["Cancer","Fisser","other"]
 const medicineselect=["Combiplain","OneL"]
 const Frequencyselect=["High","Low"]
 const Timingselect=["Morning","Evening"]
 const Adminselect=["I","II","III"]
 

 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={0} justifyContent="center" alignItems="center"  >
        
          <Grid itemxs={2} sm={10}  justifyContent="center" alignItems="center">
            <FormControl Width={100*100}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                <SingleSelect
                    arr={illnessselect}
                    label="Chronic Illness"
                    name="cillness"
                    value={values.cillness}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "cillness",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText= {
                      errors.cillness && touched.cillness ? (
                        <span style={{ color: "red" }}>{errors.cillness}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                  <Input
                    label="Patient Name"
                    name="pname"
                    type="text"
                    size="large"
                    value={values.pname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.pname && touched.pname ? (
                        <span style={{ color: "red" }}>{errors.pname}</span>
                      ) : null
                    }
                  />
                  
                </Grid>
                
                
                <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"   alignItems="center">
                <Input
                    label="Diagno Date"
                    name="date"
                    type="date"
                    size="large"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.date && touched.date ? (
                        <span style={{ color: "red" }}>
                          {errors.date}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                <Input
                    label="Remission Date"
                    name="duedate"
                    type="date"
                    size="large"
                    value={values.duedate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.duedate && touched.duedate ? (
                        <span style={{ color: "red" }}>
                          {errors.duedate}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
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
                        <span style={{ color: "red" }}>
                          {errors.remark}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={medicineselect}
                    label="Medicine"
                    name="medicine"
                    value={values.medicine}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "medicine",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.medicine && touched.medicine ? (
                        <span style={{ color: "red" }}>{errors.medicine}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={Frequencyselect}
                    label="Frequency"
                    name="frequency"
                    value={values.frequency}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "frequency",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.frequency && touched.frequency ? (
                        <span style={{ color: "red" }}>{errors.frequency}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={Timingselect}
                    label="Timing"
                    name="timing"
                    value={values.timing}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "timing",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.timing && touched.timing ? (
                        <span style={{ color: "red" }}>{errors.timing}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={Adminselect}
                    label="Admin Route"
                    name="adminroute"
                    value={values.adminroute}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "adminroute",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.adminroute && touched.adminroute ? (
                        <span style={{ color: "red" }}>{errors.adminroute}</span>
                      ) : null
                    }
                  />
                </Grid>
               
           
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Duration"
                    name="duration"
                    type="text"
                    size="large"
                    value={values.duration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.duration && touched.duration ? (
                        <span style={{ color: "red" }}>
                          {errors.duration}
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

export default ChronicIllnessForm;

  