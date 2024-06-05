import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"



const MergeDestinationForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    MergeDestinationForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  const arrDesignationUsed = ["#", "#"];
  const arrDesignationRecord = ["#", "#"];



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={arrDesignationUsed}
                    label="Designation records to be used"
                    name="DesignationUsed"
                    value={values.DesignationUsed}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "DesignationUsed",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.DesignationUsed && touched.DesignationUsed ? (
                        <span style={{ color: "red" }}>{errors.DesignationUsed}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={arrDesignationRecord}
                    label="Designation records to be merged"
                    name="DesignationRecord"
                    value={values.DesignationRecord}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "DesignationRecord",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.DesignationRecord && touched.DesignationRecord ? (
                        <span style={{ color: "red" }}>{errors.DesignationRecord}</span>
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


export default MergeDestinationForm;
