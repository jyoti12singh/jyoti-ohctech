import Ohclogo from "./Ohclogo";
import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import { InputLabel, MenuItem, Select } from "@mui/material";



const SelectShiftForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    SelectShiftForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


//   const Medselect = ["Active", "Not Active"];
     const shift = ["A", "B", "C"];



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
              <SingleSelect
                    arr={shift}
                    label="Select Shift"
                    name="shiftNo"
                    value={values.shiftNo}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "shiftNo",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.shiftNo && touched.shiftNo ? (
                        <span style={{ color: "red" }}>{errors.shiftNo}</span>
                      ) : null
                    }
                  />
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};


export default SelectShiftForm;
