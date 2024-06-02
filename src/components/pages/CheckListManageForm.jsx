import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const CheckListManageForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    CheckListManageForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const issueto = ["OHC", "......."];
  const itemtype = ["dispensary", "....."];
  const itemType = ["Instrument and items", "Comments"];
  const item = [".......", "......"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
      
          <Grid item xs={12}  justifyContent="center" alignItems="center" sx={{width:300}}>
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
      
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={issueto}
                    label="Issue To*"
                    name="issueto"
                    value={values.issueto}
                    onChange={(event, newValue) =>{
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
                    arr={itemtype}
                    label="OHC Location*"
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
                    arr={itemType}
                    label="Item Type*"
                    name="itemtype"
                    value={values.itemtype}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "itemtype",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.itemtype && touched.itemtype ? (
                        <span style={{ color: "red" }}>
                          {errors.itemtype}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={item}
                    label="Item*"
                    name="item"
                    value={values.item}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "item",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.item && touched.item ? (
                        <span style={{ color: "red" }}>
                          {errors.item}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="QTY"
                    name="qty"
                    type="number"
                    size="large"
                    value={values.qty}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.qty && touched.qty ? (
                        <span style={{ color: "red" }}>
                          {errors.qty}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Unit"
                    name="unit"
                    type="text"
                    size="large"
                    value={values.unit}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.unit && touched.unit ? (
                        <span style={{ color: "red" }}>
                          {errors.unit}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Delete"
                    name="delete"
                    type="text"
                    size="large"
                    value={values.delete}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.delete && touched.delete ? (
                        <span style={{ color: "red" }}>
                          {errors.delete}
                        </span>
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
  
export default CheckListManageForm;

