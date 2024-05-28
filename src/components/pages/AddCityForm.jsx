import Ohclogo from "./Ohclogo";
import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import { InputLabel, MenuItem, Select } from "@mui/material";



const AddCityForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    AddCityForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };




//   const Medselect = ["Active", "Not Active"];
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
                    label="City"
                    name="city"
                    type="text"
                    size="large"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.city && touched.city? (
                        <span style={{ color: "red" }}>{errors.city}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Ac Per KM Cost"
                    name="AcPerKMCost"
                    type="number"
                    size="large"
                    value={values.AcPerKMCost}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.AcPerKMCost && touched.AcPerKMCost? (
                        <span style={{ color: "red" }}>{errors.AcPerKMCost}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Ac Ambulance Charge"
                    name="AcAmbulanceCharge"
                    type="number"
                    size="large"
                    value={values.AcAmbulanceCharge}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.AcAmbulanceCharge && touched.AcAmbulanceCharge? (
                        <span style={{ color: "red" }}>{errors.AcAmbulanceCharge}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Non Ac Per KM Cost"
                    name="NonAcPerKMCost"
                    type="number"
                    size="large"
                    value={values.NonAcPerKMCost}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.NonAcPerKMCost && touched.NonAcPerKMCost? (
                        <span style={{ color: "red" }}>{errors.NonAcPerKMCost}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Non Ac Ambulance Charge"
                    name="NonAcAmbulanceCharge"
                    type="number"
                    size="large"
                    value={values.NonAcAmbulanceCharge}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.NonAcAmbulanceCharge && touched.NonAcAmbulanceCharge? (
                        <span style={{ color: "red" }}>{errors.NonAcAmbulanceCharge}</span>
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


export default AddCityForm;
