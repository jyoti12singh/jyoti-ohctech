import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";

const CheckupTypeNameForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    CheckupTypeNameForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


   const status = ["Active", "Not Active"];
   const choice = ["Yes", "No"];
   const rules =['Rule1', 'Rule2', 'Rule3']


return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Check Type Name"
                    name="CheckTypeName"
                    type="text"
                    size="large"
                    value={values.CheckTypeName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.CheckTypeName && touched.CheckTypeName? (
                        <span style={{ color: "red" }}>{errors.CheckTypeName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Check Type Code"
                    name="CheckTypeCode"
                    type="number"
                    size="large"
                    value={values.CheckTypeCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.CheckTypeCode && touched.CheckTypeCode? (
                        <span style={{ color: "red" }}>{errors.CheckTypeCode}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Valid Duration(in months)"
                    name="Duration"
                    type="number"
                    size="large"
                    value={values.Duration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Duration && touched.Duration? (
                        <span style={{ color: "red" }}>{errors.Duration}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Cost"
                    name="Cost"
                    type="number"
                    size="large"
                    value={values.Cost}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Cost && touched.Cost? (
                        <span style={{ color: "red" }}>{errors.Cost}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={status}
                    label="Check Form Section"
                    name="CheckFormSection"
                    value={values.CheckFormSection}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "CheckFormSection",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.CheckFormSection && touched.CheckFormSection ? (
                        <span style={{ color: "red" }}>{errors.CheckFormSection}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={status}
                    label="Set Status"
                    name="SetStatus"
                    value={values.SetStatus}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "SetStatus",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.SetStatus && touched.SetStatus ? (
                        <span style={{ color: "red" }}>{errors.SetStatus}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={choice}
                    label="Is Lab Checkup?"
                    name="LabCheckup"
                    value={values.LabCheckup}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "LabCheckup",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.LabCheckup && touched.LabCheckup ? (
                        <span style={{ color: "red" }}>{errors.LabCheckup}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={choice}
                    label="is Section Choice Available?"
                    name="SectionChoiceAvailable"
                    value={values.SectionChoiceAvailable}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "SectionChoiceAvailable",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.SectionChoiceAvailable && touched.SectionChoiceAvailable ? (
                        <span style={{ color: "red" }}>{errors.SectionChoiceAvailable}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={rules}
                    label="Applicable Ohcs"
                    name="ApplicableOhcs"
                    value={values.ApplicableOhcs}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "ApplicableOhcs",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.ApplicableOhcs && touched.ApplicableOhcs ? (
                        <span style={{ color: "red" }}>{errors.ApplicableOhcs}</span>
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


export default CheckupTypeNameForm;
