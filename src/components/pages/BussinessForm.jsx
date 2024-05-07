import Ohclogo from "./Ohclogo";
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useBUHeadEmail } from "react";
import MultiCheckbox from "./MultiCheckbox";

const BussinessForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  BussinessForm.propTypes = {
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
                    label="Bussiness Name"
                    name="BussinessName"
                    type="text"
                    size="large"
                    value={values.BussinessName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.BussinessName && touched.BussinessName ? (
                        <span style={{ color: "red" }}>{errors.BussinessName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" Bussiness head name"
                    name="BUHEADName"
                    type="text"
                    size="large"
                    value={values.BUHEADName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.BUHEADName && touched.BUHEADName ? (
                        <span style={{ color: "red" }}>
                          {errors.BUHEADName}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Bussiness Email"
                    name="BUHeadEmail"
                    type="text"
                    size="large"
                    value={values.BUHeadEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.BUHeadEmail && touched.BUHeadEmail ? (
                        <span style={{ color: "red" }}>{errors.BUHeadEmail}</span>
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

export default BussinessForm;

  