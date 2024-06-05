import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import SingleSelect from "../common/SingleSelect"



const MergeComplaintForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    MergeComplaintForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  const arrComplaintRecordUsed = ["#", "#"];
  const arrComplaintRecordMerged = ["#", "#"];


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={arrComplaintRecordUsed}
                    label="Complaint Record Used"
                    name="ComplaintRecordUsed"
                    value={values.ComplaintRecordUsed}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "ComplaintRecordUsed",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.ComplaintRecordUsed && touched.ComplaintRecordUsed ? (
                        <span style={{ color: "red" }}>{errors.ComplaintRecordUsed}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={arrComplaintRecordMerged}
                    label="Complaint Record Merged"
                    name="ComplaintRecordMerged"
                    value={values.ComplaintRecordMerged}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "ComplaintRecordMerged",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.ComplaintRecordMerged && touched.ComplaintRecordMerged ? (
                        <span style={{ color: "red" }}>{errors.ComplaintRecordMerged}</span>
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


export default MergeComplaintForm;
