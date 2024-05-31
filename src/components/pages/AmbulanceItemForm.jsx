
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const AmbulanceItemForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    AmbulanceChecklistForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const issueto = ["OHC", "......."];
  const ohclocation = ["Dwarka", ".........", "......."];
  const itemcatagories=["Capital/NonConsumable/Intruments","......"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
         
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={issueto}
                    label="Issue To*"
                    name="issueto"
                    value={values.issueto}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "issueto",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.issueto && touched.issueto ? (
                        <span style={{ color: "red" }}>{errors.issueto}</span>
                      ) : null
                    }
                  />
                </Grid>

            
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={ohclocation}
                    label="OHC Location"
                    name="ohclocation"
                    value={values.ohclocation}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "ohclocation",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.ohclocation && touched.ohclocation ? (
                        <span style={{ color: "red" }}>
                          {errors.ohclocation}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                     
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={itemcatagories}
                    label="Item Catagories"
                    name="itemcatagories"
                    value={values.itemcatagories}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "itemcatagories",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.itemcatagories && touched.itemcatagories ? (
                        <span style={{ color: "red" }}>
                          {errors.itemcatagories}
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

export default AmbulanceItemForm;

