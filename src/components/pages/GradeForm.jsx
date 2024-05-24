import Ohclogo from "./Ohclogo";
import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import { InputLabel, MenuItem, Select } from "@mui/material";



const GradeForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    GradeForm.propTypes = {
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
                    label="Grade Name"
                    name="GradeName"
                    type="text"
                    size="large"
                    value={values.GradeName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.GradeName && touched.GradeName? (
                        <span style={{ color: "red" }}>{errors.GradeName}</span>
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


export default GradeForm;
