import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"


//import Select from "@mui/material";
const DeviceForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
  DeviceForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  //const ohcselect = ["Student", "Employee"];
  // const adroute=["ICU","Personal Clinic","Government Hospital"];
  const acstatus=["Yes","No"];
 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">

          <Grid item xs={12} sm={12} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter Device Name"
                    name="deviceName"
                    type="text"
                    size="large"
                    value={values.deviceName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.deviceName && touched.deviceName? (
                        <span style={{ color: "red" }}>{errors.deviceName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={acstatus}
                    label="is Active"
                    name="isActive"
                    value={values.isActive}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "isActive",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.isActive && touched.isActive ? (
                        <span style={{ color: "red" }}>{errors.isActive}</span>
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

export default DeviceForm;
