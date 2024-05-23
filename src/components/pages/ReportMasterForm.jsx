import Ohclogo from "./Ohclogo";
import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"

import { InputLabel, MenuItem, Select } from "@mui/material";



const ReportMasterForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    ReportMasterForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


//   const Medselect = ["Active", "Not Active"];
//   const isDefault = ["Yes", "No"];

const Typearr = ["YES","NO"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Report Code"
                    name="ReportCode"
                    type="text"
                    size="large"
                    value={values.ReportCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.ReportCode && touched.ReportCode? (
                        <span style={{ color: "red" }}>{errors.ReportCode}</span>
                      ) : null
                    }
                  />
                </Grid>
              <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Report Name"
                    name="ReportName"
                    type="text"
                    size="large"
                    value={values.ReportName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.ReportName && touched.ReportName? (
                        <span style={{ color: "red" }}>{errors.ReportName}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item  xs={12} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                  // sx={{ width: "150px" }}
                  arr={Typearr}
                  label="Report Type"
                  name="ReportType"
                  value={values.ReportType}
                  onChange={(event, newValue) => {
                    const syntheticEvent = {
                      target: {
                        name: 'ReportType', 
                        value: newValue, 
                      },
                    };
                    handleChange(syntheticEvent); 
                  }}
                  onBlur={handleBlur}
                  type="text"
                  helpertext={
                    errors.ReportType && touched.ReportType ? (
                      <span style={{ color: "red" }}>{errors.ReportType}</span>
                    ) : null
                  }
                />
                </Grid>



                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="URL"
                    name="url"
                    type="text"
                    size="large"
                    value={values.url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.url && touched.url? (
                        <span style={{ color: "red" }}>{errors.url}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Function Name"
                    name="FunctionName"
                    type="text"
                    size="large"
                    value={values.FunctionName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.FunctionName && touched.FunctionName? (
                        <span style={{ color: "red" }}>{errors.FunctionName}</span>
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


export default ReportMasterForm;
