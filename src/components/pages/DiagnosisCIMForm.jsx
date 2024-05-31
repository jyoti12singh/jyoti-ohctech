import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import SingleSelect from "../common/SingleSelect";


const DiagnosisCIMForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
  diagnosis,
  abnormility,
}) => {
       DiagnosisCIMForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  // const DiagnosisName = ["#BOTH BONES LEFT FOREARM", "........."];
  // const ChronicIllness = ["A", "B",  "C"];

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
                    arr={abnormility}
                    label="Chronic Illness"
                    name="abnormality"
                    value={values.abnormality

                    }
                    // onChange={(event, newValue) => {
                    //   const syntheticEvent = {
                    //     target: {
                    //       name: "abnormality",
                    //       value: newValue,
                    //     },
                    //   };
                    //   handleChange(syntheticEvent);
                    // }}
                    // onChange={handleChange}
                    onChange={(event, newValue) => {
                      setFieldValue('abnormality', newValue ? newValue.label : '');
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.abnormality && touched.abnormality ? (
                        <span style={{ color: "red" }}>
                          {errors.abnormality
    }
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

export default DiagnosisCIMForm;

