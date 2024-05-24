import Ohclogo from "./Ohclogo";
import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import { InputLabel, MenuItem, Select } from "@mui/material";



const FirstAidForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    FirstAidForm.propTypes = {
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



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Box Name"
                    name="BoxName"
                    type="text"
                    size="large"
                    value={values.BoxName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.BoxName && touched.BoxName? (
                        <span style={{ color: "red" }}>{errors.BoxName}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Box Code"
                    name="boxCode"
                    type="text"
                    size="large"
                    value={values.boxCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.boxCode && touched.boxCode? (
                        <span style={{ color: "red" }}>{errors.boxCode}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Box Loc"
                    name="boxLoc"
                    type="text"
                    size="large"
                    value={values.boxLoc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.boxLoc && touched.boxLoc? (
                        <span style={{ color: "red" }}>{errors.boxLoc}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="First Aider"
                    name="firstAider"
                    type="text"
                    size="large"
                    value={values.firstAider}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.firstAider && touched.firstAider? (
                        <span style={{ color: "red" }}>{errors.firstAider}</span>
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


export default FirstAidForm;
