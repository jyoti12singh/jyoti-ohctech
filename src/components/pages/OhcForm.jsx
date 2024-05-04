import Ohclogo from "./Ohclogo";
import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const OhcForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  OhcForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const ohcselect = ["Student", "Employee"];
  const Categoryselect = ["Ohc center", "Ambulance", "First Aid Box", "Other"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4} style={{ display: "flex", justifyContent: "center" }}>
            <Ohclogo setFieldValue={setFieldValue} />
          </Grid>
          <Grid item xs={12} sm={8} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Ohc Name"
                    name="ohcName"
                    type="text"
                    size="large"
                    value={values.ohcName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.ohcName && touched.ohcName ? (
                        <span style={{ color: "red" }}>{errors.ohcName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Description"
                    name="ohcDescription"
                    type="text"
                    size="large"
                    value={values.ohcDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.ohcDescription && touched.ohcDescription ? (
                        <span style={{ color: "red" }}>
                          {errors.ohcDescription}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="OHC Code"
                    name="ohcCode"
                    type="text"
                    size="large"
                    value={values.ohcCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.ohcCode && touched.ohcCode ? (
                        <span style={{ color: "red" }}>{errors.ohcCode}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="State Code"
                    name="state"
                    type="number"
                    size="large"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.state && touched.state ? (
                        <span style={{ color: "red" }}>{errors.state}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Pin Code"
                    name="pinCode"
                    type="number"
                    size="large"
                    value={values.pinCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.pinCode && touched.pinCode ? (
                        <span style={{ color: "red" }}>{errors.pinCode}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Fax"
                    name="fax"
                    type="text"
                    size="large"
                    value={values.fax}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.fax && touched.fax ? (
                        <span style={{ color: "red" }}>{errors.fax}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Primary Phone"
                    name="primaryPhone"
                    type="number"
                    size="large"
                    value={values.primaryPhone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.primaryPhone && touched.primaryPhone ? (
                        <span style={{ color: "red" }}>
                          {errors.primaryPhone}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Email ID"
                    name="primaryEmail"
                    type="text"
                    size="large"
                    value={values.primaryEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.primaryEmail && touched.primaryEmail ? (
                        <span style={{ color: "red" }}>
                          {errors.primaryEmail}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Icon Color"
                    name="iconColor"
                    type="text"
                    size="large"
                    value={values.iconColor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.iconColor && touched.iconColor ? (
                        <span style={{ color: "red" }}>{errors.iconColor}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Icon Text"
                    name="iconText"
                    type="text"
                    size="large"
                    value={values.iconText}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.iconText && touched.iconText ? (
                        <span style={{ color: "red" }}>{errors.iconText}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={ohcselect}
                    label="Select OHC TYPE"
                    name="ohcType"
                    value={values.ohcType}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "ohcType",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.ohcType && touched.ohcType ? (
                        <span style={{ color: "red" }}>{errors.ohcType}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Address"
                    name="address"
                    type="text"
                    size="large"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.address && touched.address ? (
                        <span style={{ color: "red" }}>{errors.address}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Categoryselect}
                    label="OHC Category"
                    name="ohcCategory"
                    value={values.ohcCategory}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "ohcCategory",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.ohcCategory && touched.ohcCategory ? (
                        <span style={{ color: "red" }}>
                          {errors.ohcCategory}
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

export default OhcForm;

