import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import SingleSelect from "../common/SingleSelect";
// import { useState,useEffect } from "react";
// import useAxiosPrivate from '../../utils/useAxiosPrivate';

const DiagnosisBSMForm = ({
  values,
  touched,
  handleBlur,
  errors,
  // handleChange,
  setFieldValue,
  handleSubmit,
  diagnosis,
  bodySystem,
  // bodySystemMap,
  // setBodysystem
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

  
  
  
  // const [diagnosisMap,setDiagnosisMap] = useState(new Map());
  // const diagnosisMap = new Map();

 







  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
         
          <Grid item xs={12} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={diagnosis}
                    label="Diagnosis Name"
                    name="diagnosis"
                    value={values.diagnosis}
                    // onChange={(event, newValue) => {
                    //   const syntheticEvent = {
                    //     target: {
                    //       name: "diagnosis",
                    //       value: newValue,
                    //     },
                    //   };
                    //   handleChange(syntheticEvent);
                    // }}
                    // handleChange ={handleChange}

                    onChange={(event, newValue) => {
                      setFieldValue('diagnosis', newValue ? newValue.label : '');
                    }}

                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.diagnosis && touched.diagnosis ? (
                        <span style={{ color: "red" }}>{errors.diagnosis}</span>
                      ) : null
                    }
                  />
                </Grid>

               
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={bodySystem}
                    label="Slect Body System"
                    name="system"
                    value={values.system}
                    // onChange={(event, newValue) => {
                    //   const syntheticEvent = {
                    //     target: {
                    //       name: "system",
                    //       value: newValue,
                    //     },
                    //   };
                    //   handleChange(syntheticEvent);
                    // }}
                    onChange={(event, newValue) => {
                      setFieldValue('system', newValue ? newValue.label : '');
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.system && touched.system ? (
                        <span style={{ color: "red" }}>
                          {errors.system}
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

