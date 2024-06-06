import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import SingleSelect from "../common/SingleSelect"



const MergeContractorForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    MergeContractorForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  const arrContractorRecordUsed = ["#", "#"];
  const arrContractorRecordMerged = ["#", "#"];


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={arrContractorRecordUsed}
                    label="Contractor Record Used"
                    name="ContractorRecordUsed"
                    value={values.ContractorRecordUsed}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "ContractorRecordUsed",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.ContractorRecordUsed && touched.ContractorRecordUsed ? (
                        <span style={{ color: "red" }}>{errors.ContractorRecordUsed}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={arrContractorRecordMerged}
                    label="Contractor Record Merged"
                    name="ContractorRecordMerged"
                    value={values.ContractorRecordMerged}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "ContractorRecordMerged",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.ContractorRecordMerged && touched.ContractorRecordMerged ? (
                        <span style={{ color: "red" }}>{errors.ContractorRecordMerged}</span>
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


export default MergeContractorForm;
