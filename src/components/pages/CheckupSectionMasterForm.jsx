import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import TextArea from "../pages/TextArea";

const CheckupSectionMasterForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    CheckupSectionMasterForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


       const status = ["Active", "Not Active"];
       const rules =['Rule1', 'Rule2', 'Rule3'];
       const Interpret = ["HBA1C", "HBA2C"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8} justifyContent="center" alignItems="center">
            <FormControl>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Checkup Section Name"
                    name="CheckupSectionName"
                    type="text"
                    size="large"
                    value={values.CheckupSectionName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.CheckupSectionName && touched.CheckupSectionName? (
                        <span style={{ color: "red" }}>{errors.CheckupSectionName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Description"
                    name="Description"
                    type="text"
                    size="large"
                    value={values.Description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Description && touched.Description? (
                        <span style={{ color: "red" }}>{errors.Description}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <TextArea
                    label="Notes"
                    name="Notes"
                    type="text"
                    size="large"
                    value={values.Notes}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Notes && touched.Notes? (
                        <span style={{ color: "red" }}>{errors.Notes}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <TextArea
                    label="Comments"
                    name="Comments"
                    type="text"
                    size="large"
                    value={values.Comments}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Comments && touched.Comments? (
                        <span style={{ color: "red" }}>{errors.Comments}</span>
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
                <MultipleSelect
                    arr={['Rule1', 'Rule2', 'Rule3']}
                    label="Applicable Rules"
                    name="ApplicableRules"
                    value={values.ApplicableRules}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "ApplicableRules",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.ApplicableRules && touched.ApplicableRules ? (
                        <span style={{ color: "red" }}>{errors.ApplicableRules}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Section Sequence"
                    name="SectionSequence"
                    type="number"
                    size="large"
                    value={values.SectionSequence}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.SectionSequence && touched.SectionSequence? (
                        <span style={{ color: "red" }}>{errors.SectionSequence}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={Interpret}
                    label="Interpretation"
                    name="Interpretation"
                    value={values.Interpretation}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "Interpretation",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.Interpretation && touched.Interpretation ? (
                        <span style={{ color: "red" }}>{errors.Interpretation}</span>
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


export default CheckupSectionMasterForm;
