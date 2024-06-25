import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";
const DisposalAgencyForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    DisposalAgencyForm.propTypes = {
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

          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter Agency  Name"
                    name="agencyName"
                    type="text"
                    size="large"
                    value={values.agencyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.agencyName && touched.agencyName? (
                        <span style={{ color: "red" }}>{errors.agencyName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter Agency Address"
                    name="agencyAddress"
                    type="text"
                    size="large"
                    value={values.agencyAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.agencyAddress && touched.agencyAddress? (
                        <span style={{ color: "red" }}>{errors.agencyAddress}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter Registration No."
                    name="registrationNo"
                    type="text"
                    size="large"
                    value={values.registrationNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.registrationNo && touched.registrationNo? (
                        <span style={{ color: "red" }}>{errors.registrationNo}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter Allocated Reg No to OHC"
                    name="allocationRegNo"
                    type="text"
                    size="large"
                    value={values.allocationRegNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.allocationRegNo && touched.allocationRegNo? (
                        <span style={{ color: "red" }}>{errors.allocationRegNo}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter HOD  Name"
                    name="hodName"
                    type="text"
                    size="large"
                    value={values.hodName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.hodName && touched.hodName? (
                        <span style={{ color: "red" }}>{errors.hodName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter HOD Email"
                    name="hodEmail"
                    type="text"
                    size="large"
                    value={values.hodEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.hodEmail && touched.hodEmail? (
                        <span style={{ color: "red" }}>{errors.hodEmail}</span>
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

export default DisposalAgencyForm;