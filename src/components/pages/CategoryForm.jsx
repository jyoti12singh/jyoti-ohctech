import Ohclogo from "./Ohclogo";
import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"

import { InputLabel, MenuItem, Select } from "@mui/material";



const CategoryForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    CategoryForm.propTypes = {
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
                    label="Categoy Name"
                    name="CategoryName"
                    type="text"
                    size="large"
                    value={values.CategoryName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.CategoryName && touched.CategoryName? (
                        <span style={{ color: "red" }}>{errors.CategoryName}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item  xs={12} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                  // sx={{ width: "150px" }}
                  arr={Typearr}
                  label="Status"
                  name="status"
                  value={values.status}
                  onChange={(event, newValue) => {
                    const syntheticEvent = {
                      target: {
                        name: 'status', 
                        value: newValue, 
                      },
                    };
                    handleChange(syntheticEvent); 
                  }}
                  onBlur={handleBlur}
                  type="text"
                  helpertext={
                    errors.status && touched.status ? (
                      <span style={{ color: "red" }}>{errors.status}</span>
                    ) : null
                  }
                />
                </Grid>



                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Remarks"
                    name="remarks"
                    type="text"
                    size="large"
                    value={values.remarks}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.remarks && touched.remarks? (
                        <span style={{ color: "red" }}>{errors.remarks}</span>
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


export default CategoryForm;
