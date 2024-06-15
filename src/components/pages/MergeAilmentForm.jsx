import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
//import TextArea from "./TextArea";
//import { useGridDate } from "ag-grid-react";

//import TextArea from "../TextArea";
import { useduedate } from 'react';

const MergeAilmentForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    MergeAilmentForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

 const primaryselect=["I","II","III"]
 const duplicateselect=["I","II","III"]

 

 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={0} justifyContent="center" alignItems="center"  sx={{ width: 320 }} >
        
          <Grid itemxs={2}   justifyContent="center" alignItems="center">
            <FormControl FullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12}  container spacing={1} justifyContent="center"  alignItems="center">
                <SingleSelect
                    arr={primaryselect}
                    label="Ailment Record to be Used"
                    name="primaryailment"
                    value={values.primaryailment}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "primaryailment",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText= {
                      errors.primaryailment && touched.primaryailment ? (
                        <span style={{ color: "red" }}>{errors.primaryailment}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={duplicateselect}
                    label="Ailment Record to be Merged"
                    name="duplicateailment"
                    value={values.duplicateailment}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "duplicateailment",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.duplicateailment && touched.duplicateailment ? (
                        <span style={{ color: "red" }}>{errors.duplicateailment}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center"  alignItems="center">
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
                        <span style={{ color: "red" }}>{errors.delete}</span>
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

export default MergeAilmentForm;

  