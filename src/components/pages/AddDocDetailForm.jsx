import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"



const AddDocDetailForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    AddDocDetailForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  const Medselect = ["Active", "Not Active"];
  const isDefault = ["Yes", "No"];



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter Doctor Name"
                    name="doctorName"
                    type="text"
                    size="large"
                    value={values.doctorName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.doctorName && touched.doctorName? (
                        <span style={{ color: "red" }}>{errors.doctorName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Medselect}
                    label="Dcotor Emp Code"
                    name="doctorEmpId"
                    value={values.doctorEmpId}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "doctorEmpId",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.doctorEmpId && touched.doctorEmpId ? (
                        <span style={{ color: "red" }}>{errors.doctorEmpId}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Doctor Details"
                    name="doctorDesc"
                    type="text"
                    size="large"
                    value={values.doctorDesc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.doctorDesc && touched.doctorDesc ? (
                        <span style={{ color: "red" }}>
                          {errors.doctorDesc}
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


export default AddDocDetailForm;
