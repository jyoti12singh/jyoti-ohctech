import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"


const MedFreqForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
  MedFreqForm.propTypes = {
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
                    label="Enter Medicine frequency"
                    name="medicineFrequency"
                    type="text"
                    size="large"
                    value={values.medicineFrequency}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.medicineFrequency && touched.medicineFrequency? (
                        <span style={{ color: "red" }}>{errors.medicineFrequency}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Description"
                    name="frequencyDescription"
                    type="text"
                    size="large"
                    value={values.frequencyDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.frequencyDescription && touched.frequencyDescription ? (
                        <span style={{ color: "red" }}>
                          {errors.frequencyDescription}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="calculatedCity"
                    name="qty"
                    type="text"
                    size="large"
                    value={values.qty}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.qty && touched.qty ? (
                        <span style={{ color: "red" }}>{errors.qty}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="displayOrder"
                    name="displayOrder"
                    type="text"
                    size="large"
                    value={values.displayOrder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.displayOrder && touched.displayOrder ? (
                        <span style={{ color: "red" }}>{errors.displayOrder}</span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Medselect}
                    label="status"
                    name="active"
                    value={values.active}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "active",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.active && touched.active ? (
                        <span style={{ color: "red" }}>{errors.active}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={isDefault}
                    label="select default"
                    name="isDefault"
                    value={values.isDefault}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "isDefault",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.isDefault && touched.isDefault ? (
                        <span style={{ color: "red" }}>{errors.isDefault}</span>
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


export default MedFreqForm;
