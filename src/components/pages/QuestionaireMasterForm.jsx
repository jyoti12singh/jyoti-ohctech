import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { usesecname } from "react";
import MultiCheckbox from "./MultiCheckbox";

const QuestionaireForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  QuestionaireForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const Type = ["#", "##"];
  const Section = ["#", "##"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:500}}>
       
          <Grid item  justifyContent="center" alignItems="center" >
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:470}}>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center" >
                  <Input
                    label="ENTER THE QUESTION"
                    name="question"
                    type="text"
                    size="large"
                    value={values.question}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.question && touched.question ? (
                        <span style={{ color: "red" }}>{errors.question}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="QUESTION IN LOCAL LANGUAGE"
                    name="locallanguage"
                    type="text"
                    size="large"
                    value={values.locallanguage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.locallanguage && touched.locallanguage ? (
                        <span style={{ color: "red" }}>
                          {errors.locallanguage}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
          
   
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Type}
                    label="Select  TYPE"
                    name="type"
                    value={values.type}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "type",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.type && touched.type ? (
                        <span style={{ color: "red" }}>{errors.type}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Section}
                    label="SUB SECTION AVAILABLE"
                    name="secavailable"
                    value={values.secavailable}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "secavailable",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.secavailable && touched.secavailable ? (
                        <span style={{ color: "red" }}>
                          {errors.secavailable}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
             
     
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=" SECTION NAME"
                    name="secname"
                    type="text"
                    size="large"
                    value={values.secname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.secname && touched.secname ? (
                        <span style={{ color: "red" }}>{errors.secname}</span>
                      ) : null
                    }
                  />
                </Grid>

       
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="SEQUENCE"
                    name="seq"
                    type="text"
                    size="large"
                    value={values.seq}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.seq && touched.seq ? (
                        <span style={{ color: "red" }}>{errors.seq}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="SUB SECTION ORDER"
                    name="order"
                    type="text"
                    size="large"
                    value={values.order}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.order && touched.order ? (
                        <span style={{ color: "red" }}>{errors.order}</span>
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

export default QuestionaireForm;

