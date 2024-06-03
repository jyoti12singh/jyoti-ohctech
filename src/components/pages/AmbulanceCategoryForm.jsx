import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";

const AmbulanceCategoryForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    AmbulanceCategoryForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Ambulance Category"
                    name="AmbulanceCategory"
                    type="text"
                    size="large"
                    value={values.AmbulanceCategory}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.AmbulanceCategory && touched.AmbulanceCategory? (
                        <span style={{ color: "red" }}>{errors.AmbulanceCategory}</span>
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


export default AmbulanceCategoryForm;
