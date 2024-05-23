
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useduedate } from "react";
import MultiCheckbox from "./MultiCheckbox";

const CalibrationEquipmentForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
CalibrationEquipmentForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  
  const CalibrationEquipment = ["#", "#",];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
       
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={CalibrationEquipment}
                    label="Name of Calibration Equipment"
                    name="calibration"
                    value={values.calibration}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "calibration",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.calibration && touched.calibration ? (
                        <span style={{ color: "red" }}>
                          {errors.calibration}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Name of Model and Brand"
                    name="modelbrand"
                    type="text"
                    size="large"
                    value={values.modelbrand}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.modelbrand && touched.modelbrand ? (
                        <span style={{ color: "red" }}>{errors.modelbrand}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="ID number"
                    name="idnumber"
                    type="text"
                    size="large"
                    value={values.idnumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.idnumber && touched.idnumber ? (
                        <span style={{ color: "red" }}>
                          {errors.idnumber}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Location"
                    name="location"
                    type="text"
                    size="large"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.location && touched.location ? (
                        <span style={{ color: "red" }}>{errors.location}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Date of Calibration"
                    name="date"
                    type="text"
                    size="large"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.date && touched.date ? (
                        <span style={{ color: "red" }}>{errors.date}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" Due Date of Calibration"
                    name="duedate"
                    type="text"
                    size="large"
                    value={values.duedate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.duedate && touched.duedate ? (
                        <span style={{ color: "red" }}>{errors.duedate}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                    <button>
                    Update Documnet
                  <Input
                    
                    name="docupdate"
                    type="file"
                    size="large"
                    value={values.docupdate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.docupdate && touched.docupdate ? (
                        <span style={{ color: "red" }}>{errors.docupdate}</span>
                      ) : null
                    }
                  />
                  </button>
                </Grid>


     
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CalibrationEquipmentForm;

