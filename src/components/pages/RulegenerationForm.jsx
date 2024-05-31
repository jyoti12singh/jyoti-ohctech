import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
import TextArea from "./TextArea";

//import TextArea from "../TextArea";

const RulegenerationForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    RulegenerationForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


 const Checkupparameter=["Active","Not Active"]
 const Condition=["I","II","III"]
 const Gender=["Mail","Femail","Other"]
 const Range=["Lower","Middle","High"]
 const Abnormality=["#","#"]
 const TextComparsion=["#","#"]
 const Result=["#","#","#"]

 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <form onSubmit={handleSubmit}>
      <Grid  container spacing={0} justifyContent="center" alignItems="center"  >
      
        <Grid  sm={12} justifyContent="center" alignItems="center">
          <FormControl >
            <Grid  container spacing={1} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <Input
                    label="Open Bracket"
                    name="bracket"
                    type="text"
                    size="large"
                    value={values.bracket}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.bracket && touched.bracket ? (
                        <span style={{ color: "red" }}>{errors.bracket}</span>
                      ) : null
                    }
                  />
                </Grid>
                
              
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <Input
                    label="Age Start"
                    name="age"
                    type="text"
                    size="large"
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.age && touched.age ? (
                        <span style={{ color: "red" }}>
                          {errors.age}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
             
              
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Checkupparameter}
                    label="Select Checkup Parameter"
                    name="checkup"
                    value={values.checkup}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "checkup",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.checkup && touched.checkup ? (
                        <span style={{ color: "red" }}>{errors.checkup}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <Input
                    label="Risk"
                    name="risk"
                    type="text"
                    size="large"
                    value={values.risk}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.risk && touched.risk ? (
                        <span style={{ color: "red" }}>{errors.risk}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <Input
                    label="Age End"
                    name="ageend"
                    type="text"
                    size="large"
                    value={values.ageend}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.ageend && touched.ageend ? (
                        <span style={{ color: "red" }}>{errors.ageend}</span>
                      ) : null
                    }
                  />
                </Grid>
                
              
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center" >
                  <SingleSelect
                    arr={Condition}
                    label="Select Condition"
                    name="condition"
                    value={values.condition}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "condition",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.condition && touched.condition ? (
                        <span style={{ color: "red" }}>
                          {errors.condition}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
               
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Range}
                    label="Range Type"
                    name="range"
                    value={values.range}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "range",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.range && touched.range ? (
                        <span style={{ color: "red" }}>{errors.range}</span>
                      ) : null
                    }
                  />
                </Grid>
                
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <Input
                    label="Value"
                    name="value"
                    type="text"
                    size="large"
                    value={values.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.value && touched.value ? (
                        <span style={{ color: "red" }}>{errors.value}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Gender}
                    label="Select Gender"
                    name="gender"
                    value={values.gender}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "gender",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.gender && touched.gender ? (
                        <span style={{ color: "red" }}>{errors.gender}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <Input
                    label="Result"
                    name="result"
                    type="text"
                    size="large"
                    value={values.result}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.result && touched.result ? (
                        <span style={{ color: "red" }}>
                          {errors.result}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <Input
                    label="Advice"
                    name="advice"
                    type="text"
                    size="large"
                    value={values.advice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.advice && touched.advice ? (
                        <span style={{ color: "red" }}>{errors.advice}</span>
                      ) : null
                    }
                  />
                </Grid>
             <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Abnormality}
                    label="Select Abnormality"
                    name="abnormality"
                    value={values.abnormality}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "abnormality",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.abnormality && touched.abnormality ? (
                        <span style={{ color: "red" }}>
                          {errors.abnormality}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={TextComparsion}
                    label="Select Text Comparsion Rule"
                    name="rule"
                    value={values.rule}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "rule",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.rule && touched.rule ? (
                        <span style={{ color: "red" }}>{errors.rule}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <Input
                    label="Close Bracket"
                    name="close"
                    type="text"
                    size="large"
                    value={values.close}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.close && touched.close ? (
                        <span style={{ color: "red" }}>
                          {errors.close}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={0} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Result}
                    label="Select Result Field"
                    name="res"
                    value={values.res}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "res",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.res && touched.res ? (
                        <span style={{ color: "red" }}>{errors.res}</span>
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

export default RulegenerationForm;

  