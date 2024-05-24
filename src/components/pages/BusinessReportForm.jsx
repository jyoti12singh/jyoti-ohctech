import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";

const BusinessReportForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  BusinessReportForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };
  const ReportName = ["##", "...."];
  const FilterName = ["##", "........."];
  const Specific=["Yes","No"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
         
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={ReportName}
                    label="Report Name "
                    name="reportname"
                    value={values.reportname}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "reportname",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.reportname && touched.reportname ? (
                        <span style={{ color: "red" }}>{errors.reportname}</span>
                      ) : null
                    }
                  />
                </Grid>

            
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={FilterName}
                    label="Filter Name"
                    name="filtername"
                    value={values.filtername}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "filtername",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.filtername && touched.filtername ? (
                        <span style={{ color: "red" }}>
                          {errors.filtername}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                     
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Specific}
                    label="Is Patient Specific"
                    name="specific"
                    value={values.specific}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "specific",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.specific && touched.specific ? (
                        <span style={{ color: "red" }}>
                          {errors.specific}
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

export default BusinessReportForm;





  