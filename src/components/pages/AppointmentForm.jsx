import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"



const AppointmentForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    AppointmentForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  const Medselect = ["Periodic Health Checkup", "OPD/ Sickness/ Fitness"];
//   const isDefault = ["Yes", "No"];



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Slot Start"
                    name="slot"
                    type="time"
                    size="large"
                    value={values.slot}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.slot && touched.slot? (
                        <span style={{ color: "red" }}>{errors.slot}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Slot End"
                    name="slotEnd"
                    type="time"
                    size="large"
                    value={values.slotEnd}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.slotEnd && touched.slotEnd? (
                        <span style={{ color: "red" }}>
                          {errors.slotEnd}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="No Of Appointment"
                    name="slotCount"
                    type="number"
                    size="large"
                    value={values.slotCount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.slotCount && touched.slotCount ? (
                        <span style={{ color: "red" }}>{errors.slotCount}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={Medselect}
                    label="Appointments Type"
                    name="appType"
                    value={values.appType}
                    onChange={(event, newValue) => {
                        const syntheticEvent = {
                        target: {
                            name: "appType",
                            value: newValue,
                        },
                        };
                        handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                        errors.appType && touched.appType ? (
                        <span style={{ color: "red" }}>{errors.appType}</span>
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


export default AppointmentForm;
