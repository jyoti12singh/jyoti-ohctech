import Input from "../common/Input";
import PropTypes from "prop-types";
import {  Grid} from "@mui/material";
import SingleSelect from "../common/SingleSelect";

 const NutrientForm = ({values,
  touched,
  handleBlur,
  errors,
  handleChange,
//   setFieldValue,
  handleSubmit,}) => {


    NutrientForm.propTypes = {
      values: PropTypes.object.isRequired,
      touched: PropTypes.object.isRequired,
      errors: PropTypes.object.isRequired,
      handleBlur: PropTypes.func.isRequired,
      handleChange: PropTypes.func.isRequired,
      setFieldValue: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired,
    };

    const DeepFry = ["Yes","No"];

  return (
          <form onSubmit={handleSubmit}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item  xs={12} sm={12} spacing={1}  container  justifyContent="center"   alignItems="center">
              <Input
                  label="Food Name"
                  name="foodName"
                  type="text"
                  size="large"
                  sx={{ width: "300px" }}
                  value={values.foodName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.foodName && touched.foodName ? (
                      <span style={{ color: "red" }}>
                        {errors.foodName}
                      </span>
                    ) : null
                  }
                />
              </Grid>
             
              <Grid item  xs={12} sm={5}  container spacing={1} justifyContent="center"   alignItems="center">
                <Input
                    label="Quantity in grams"
                    name="patientName"
                    type="text"
                    size="large"
                    value={values.patientName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.patientName && touched.patientName ? (
                        <span style={{ color: "red" }}>
                          {errors.patientName}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item  xs={12} sm={5}  container spacing={1} justifyContent="center"  alignItems="center">
                <Input
                    label="Calories"
                    name="fatherName"
                    type="text"
                    size="large"
                    value={values.fatherName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.fatherName && touched.fatherName ? (
                        <span style={{ color: "red" }}>
                          {errors.fatherName}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={5}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Protein"
                    name="dob"
                    type="text"
                    size="large"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.dob && touched.dob ? (
                        <span style={{ color: "red" }}>
                          {errors.dob}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item  xs={12} sm={5} container spacing={1} justifyContent="center"   alignItems="center">
                <Input
                    label="Added sugar"
                    name="patientName"
                    type="text"
                    size="large"
                    value={values.patientName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.patientName && touched.patientName ? (
                        <span style={{ color: "red" }}>
                          {errors.patientName}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item  xs={12} sm={5} container spacing={1} justifyContent="center"   alignItems="center">
                <SingleSelect
                arr={DeepFry}
                label="Deep fried"
                name="selectpatientcategory"
                value={values.selectpatientcategory}
                onChange={(event, newValue) => {
                  const syntheticEvent = {
                    target: {
                      name: "selectpatientcategory",
                      value: newValue,
                    },
                  };
                  handleChange(syntheticEvent);
                }}
                onBlur={handleBlur}
                type="text"
                helperText={
                  errors.selectpatientcategory && touched.selectpatientcategorye ? (
                    <span style={{ color: "red" }}>{errors.selectpatientcategory}</span>
                  ) : null
                }
              />
                </Grid>

                <Grid item xs={12} sm={5} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Maida"
                    name="aadharNo"
                    type="text"
                    sx = {{width:'100%'}}
                    size="large"
                    value={values.aadharNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.aadharNo && touched.aadharNo ? (
                        <span style={{ color: "red" }}>
                          {errors.aadharNo}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={5} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Saturated fats"
                    name="primaryPhone"
                    sx = {{width:'100%'}}
                    type="text"
                    size="large"
                    value={values.primaryPhone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.primaryPhone && touched.primaryPhone ? (
                        <span style={{ color: "red" }}>
                          {errors.primaryPhone}
                        </span>
                      ) : null
                    }
                  />
                </Grid>

              </Grid>
      </form>
  )
}

export default NutrientForm;

