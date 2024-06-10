import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";


//import TextArea from "../TextArea";

const TrainingDetailForm =({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    TrainingDetailForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


 const Mode=["#","##"]
 const Type=["##","#"]


 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <form onSubmit={handleSubmit}>
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:570}}>
         
         <Grid item xs={12}  justifyContent="center" alignItems="center">
           <FormControl fullWidth>
             <Grid  container  spacing={2} justifyContent="center" alignItems="center">
               <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Program Name "
                    name="programName"
                    type="text"
                    size="large"
                    value={values.programName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.programName && touched.programName ? (
                        <span style={{ color: "red" }}>{errors.programName}</span>
                      ) : null
                    }
                  />
                </Grid>
                
              
                <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center"> 
                    <Input
                    label="Programe Description "
                    name="programdescription"
                    type="text"
                    size="large"
                    value={values.programdescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.programdescription && touched.programdescription ? (
                        <span style={{ color: "red" }}>
                          {errors.programdescription}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
             
              
           
                <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center"> 
                  <Input
                    label="Programe Duration(in Days)"
                    name="programDuration"
                    type="number"
                    size="large"
                    value={values.programDuration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.programDuration && touched.programDuration ? (
                        <span style={{ color: "red" }}>{errors.programDuration}</span>
                      ) : null
                    }
                  />
                </Grid>
             
                
              
                <Grid item xs={12} sm={6}   container spacing={1} justifyContent="center" alignItems="center"> 
                  <SingleSelect
                    arr={Mode}
                    label="Select Program Mode"
                    name="programMode"
                    value={values.programMode}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "programMode",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.programMode && touched.programMode ? (
                        <span style={{ color: "red" }}>
                          {errors.programMode}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
               
                <Grid item xs={12} sm={6}   container spacing={1} justifyContent="center" alignItems="center"> 
                  <SingleSelect
                    arr={Type}
                    label="Program Type"
                    name="programType"
                    value={values.programType}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "programType",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.programType && touched.programType ? (
                        <span style={{ color: "red" }}>{errors.programType}</span>
                      ) : null
                    }
                  />
                </Grid>
                
               
              
                <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center"> 
                  <Input
                    label="Program Key Health Parameters"
                    name="keyHealthParamSection"
                    type="text"
                    size="large"
                    value={values.keyHealthParamSection}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.keyHealthParamSection && touched.keyHealthParamSection ? (
                        <span style={{ color: "red" }}>
                          {errors.keyHealthParamSection}
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

export default TrainingDetailForm;

  