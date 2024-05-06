import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const SectionForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  SectionForm.propTypes = {
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
                    label="Bussiness Unit"
                    name="BussinessUnit"
                    type="text"
                    size="large"
                    value={values.BussinessUnit}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.BussinessUnit && touched.BussinessUnit ? (
                        <span style={{ color: "red" }}>{errors.BussinessUnit}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Department Name"
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
                    label="Section Name"
                    name="SectionName"
                    type="text"
                    size="large"
                    value={values.SectionName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.SectionName && touched.SectionName ? (
                        <span style={{ color: "red" }}>{errors.SectionName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Section Head"
                    name="SectionHead"
                    type="text"
                    size="large"
                    value={values.SectionHead}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.SectionHead && touched.SectionHead ? (
                        <span style={{ color: "red" }}>{errors.SectionHead}</span>
                      ) : null
                    }
                  />
                </Grid>
            
          
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Email "
                    name="Email"
                    type="text"
                    size="large"
                    value={values.Email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Email && touched.Email ? (
                        <span style={{ color: "red" }}>
                          {errors.Email}
                        </span>
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

export default SectionForm;
