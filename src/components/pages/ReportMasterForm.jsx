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
                    name="reportCode"
                    type="text"
                    size="large"
                    value={values.reportCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.reportCode && touched.reportCode? (
                        <span style={{ color: "red" }}>{errors.reportCode}</span>
                      ) : null
                    }
                  />
                </Grid>
              <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Report Name"
                    name="reportName"
                    type="text"
                    size="large"
                    value={values.reportName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.reportName && touched.reportName? (
                        <span style={{ color: "red" }}>{errors.reportName}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item  xs={12} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                  arr={Typearr}
                  label="Report Type"
                  name="reportType"
                  value={values.reportType}
                  onChange={(event, newValue) => {
                    const syntheticEvent = {
                      target: {
                        name: 'reportType', 
                        value: newValue, 
                      },
                    };
                    handleChange(syntheticEvent); 
                  }}
                  onBlur={handleBlur}
                  type="text"
                  helpertext={
                    errors.reportType && touched.reportType ? (
                      <span style={{ color: "red" }}>{errors.reportType}</span>
                    ) : null
                  }
                />
                </Grid>



                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="URL"
                    name="reportUrl"
                    type="text"
                    size="large"
                    value={values.reportUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.reportUrl && touched.reportUrl? (
                        <span style={{ color: "red" }}>{errors.reportUrl}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Function Name"
                    name="funName"
                    type="text"
                    size="large"
                    value={values.funName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.funName && touched.funName? (
                        <span style={{ color: "red" }}>{errors.funName}</span>
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
