import Ohclogo from "./Ohclogo";
import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";

import { InputLabel, MenuItem, Select } from "@mui/material";



const InterpretationForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    InterpretationForm.propTypes = {
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
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Interpretation Header"
                    name="InterpretationHeader"
                    type="text"
                    size="large"
                    value={values.unitId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.InterpretationHeader && touched.InterpretationHeader? (
                        <span style={{ color: "red" }}>{errors.InterpretationHeader}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Key"
                    name="Key"
                    type="text"
                    size="large"
                    value={values.Key}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Key && touched.Key? (
                        <span style={{ color: "red" }}>{errors.Key}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Value(Enter $ as a separator)"
                    name="Value"
                    type="text"
                    size="large"
                    value={values.Value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Value && touched.Value? (
                        <span style={{ color: "red" }}>{errors.Value}</span>
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


export default InterpretationForm;
