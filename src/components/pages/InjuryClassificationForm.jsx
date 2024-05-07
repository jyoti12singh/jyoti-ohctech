
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useinjurycode } from "react";
import MultiCheckbox from "./MultiCheckbox";

const InjuryClassificationForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  InjuryClassificationForm.propTypes = {
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
        <Grid container spacing={2} justifyContent="center" alignItems="center"  sx={{ width: 320 }} >
        
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Injury Name"
                    name="InjuryName"
                    type="text"
                    size="large"
                    value={values.InjuryName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.InjuryName && touched.InjuryName ? (
                        <span style={{ color: "red" }}>{errors.InjuryName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" Injury discription"
                    name="injurydiscri"
                    type="text"
                    size="large"
                    value={values.injurydiscri}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.injurydiscri && touched.injurydiscri ? (
                        <span style={{ color: "red" }}>
                          {errors.injurydiscri}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Injury Code"
                    name="injurycode"
                    type="number"
                    size="large"
                    value={values.injurycode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.injurycode && touched.injurycode ? (
                        <span style={{ color: "red" }}>{errors.injurycode}</span>
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

export default InjuryClassificationForm;

  