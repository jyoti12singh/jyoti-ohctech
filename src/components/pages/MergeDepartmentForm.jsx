import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"



const MergeDepartmentForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    MergeDepartmentForm.propTypes = {
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
                    label="Department records to be used"
                    name="DepartmentUsed"
                    value={values.DepartmentUsed}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "DepartmentUsed",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.DepartmentUsed && touched.DepartmentUsed ? (
                        <span style={{ color: "red" }}>{errors.DepartmentUsed}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={arrDesignationRecord}
                    label="Department records to be merged"
                    name="DepartmentRecord"
                    value={values.DepartmentRecord}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "DepartmentRecord",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.DepartmentRecord && touched.DepartmentRecord ? (
                        <span style={{ color: "red" }}>{errors.DepartmentRecord}</span>
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


export default MergeDepartmentForm;
