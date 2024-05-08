
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
                    name="buId"
                    type="text"
                    size="large"
                    value={values.buId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.buId && touched.buId ? (
                        <span style={{ color: "red" }}>
                          {errors.buId}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Department Name"
                    name="departmentName"
                    type="text"
                    size="large"
                    value={values.departmentName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.departmentName && touched.departmentName ? (
                        <span style={{ color: "red" }}>
                          {errors.departmentName}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
        <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Department Head Name"
                    name="departmentHeadName"
                    type="text"
                    size="large"
                    value={values.departmentHeadName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.departmentHeadName && touched.departmentHeadName ? (
                        <span style={{ color: "red" }}>{errors.departmentHeadName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the DeptHead Email "
                    name="departmentEmail"
                    type="text"
                    size="large"
                    value={values.departmentEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.departmentEmail && touched.departmentEmail ? (
                        <span style={{ color: "red" }}>{errors.departmentEmail}</span>
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

