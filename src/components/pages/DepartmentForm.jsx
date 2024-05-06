
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useDeptHeadEmail } from "react";
import MultiCheckbox from "./MultiCheckbox";

const DepartmentForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  DepartmentForm.propTypes = {
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
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
         
          <Grid item xs={12} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Business Unit"
                    name="BussinessUnit"
                    type="text"
                    size="large"
                    value={values.BussinessUnit}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.BussinessUnit && touched.BussinessUnit ? (
                        <span style={{ color: "red" }}>
                          {errors.BussinessUnit}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Department Name"
                    name="DeptName"
                    type="text"
                    size="large"
                    value={values.DeptName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.DeptName && touched.DeptName ? (
                        <span style={{ color: "red" }}>
                          {errors.DeptName}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
        <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Department Head Name"
                    name="DeptHeadName"
                    type="text"
                    size="large"
                    value={values.DeptHeadName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.DeptHeadName && touched.DeptHeadName ? (
                        <span style={{ color: "red" }}>{errors.DeptHeadName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the DeptHead Email "
                    name="DeptHeadEmail"
                    type="text"
                    size="large"
                    value={values.DeptHeadEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.DeptHeadEmail && touched.DeptHeadEmail ? (
                        <span style={{ color: "red" }}>{errors.DeptHeadEmail}</span>
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

export default DepartmentForm;

