import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const CovidWahMasterForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    CovidWahMasterForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const Type = ["##", "##"];
 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
       
          <Grid item xs={12}  justifyContent="center" alignItems="center" sx={{width:300}}>
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Question in English"
                    name="english"
                    type="text"
                    size="large"
                    value={values.english}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.english && touched.english ? (
                        <span style={{ color: "red" }}>{errors.english}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Question in Hindi"
                    name="hindi"
                    type="text"
                    size="large"
                    value={values.hindi}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.hindi && touched.hindi ? (
                        <span style={{ color: "red" }}>
                          {errors.hindi}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
  
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Type}
                    label="Select Type"
                    name="type"
                    value={values.type}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "type",
                          value:newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.type && touched.type ? (
                        <span style={{ color: "red" }}>{errors.type}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" Sequence"
                    name="seq"
                    type="text"
                    size="large"
                    value={values.seq}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.seq && touched.seq ? (
                        <span style={{ color: "red" }}>{errors.seq}</span>
                      ) : null
                    }
                  />
                </Grid>
          

           
              
              </Grid>
            </FormControl>
          </Grid>
   
      </form>
    </div>
  );
};

export default CovidWahMasterForm;

