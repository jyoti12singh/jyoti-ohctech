import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";

const PatientProfileForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    PatientProfileForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

 const genderselect=["Female","Male","Third Gender"]
 const bloodgroupselect=["A+","AB+","B+","B-","O+","O-"]
 const Patientselect=["A Grade","B Grade","A + Grade"]
 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={0} justifyContent="center" alignItems="center"  >
        
          <Grid itemxs={2} sm={12}  justifyContent="center" alignItems="center">
            <FormControl Width={100*100}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={Patientselect}
                    label="Patient Category"
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
                <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"   alignItems="center">
                <Input
                    label="Patient Name"
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
                <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                <Input
                    label="Father's/Husband Name"
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
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=""
                    name="dob"
                    type="date"
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
              
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={genderselect}
                    label="Gender"
                    name="gender"
                    value={values.gender}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "gender",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.gender && touched.gender ? (
                        <span style={{ color: "red" }}>{errors.genderchoose}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={bloodgroupselect}
                    label="Blood Group"
                    name="bloodGroup"
                    value={values.bloodGroup}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "bloodGroup",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.bloodGroup && touched.bloodGroup ? (
                        <span style={{ color: "red" }}>{errors.bloodGroup}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Aadhar Number"
                    name="aadharNo"
                    type="text"
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
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Phone Number"
                    name="primaryPhone"
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
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Residing Village"
                    name="village"
                    type="text"
                    size="large"
                    value={values.village}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.village && touched.village ? (
                        <span style={{ color: "red" }}>
                          {errors.village}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Post"
                    name="post"
                    type="text"
                    size="large"
                    value={values.post}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.post && touched.post ? (
                        <span style={{ color: "red" }}>
                          {errors.post}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="PS"
                    name="ps"
                    type="text"
                    size="large"
                    value={values.ps}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.ps && touched.ps ? (
                        <span style={{ color: "red" }}>
                          {errors.ps}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Tehsil"
                    name="tehsil"
                    type="text"
                    size="large"
                    value={values.tehsil}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.tehsil && touched.tehsil ? (
                        <span style={{ color: "red" }}>
                          {errors.tehsil}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="District"
                    name="district"
                    type="text"
                    size="large"
                    value={values.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.district && touched.district ? (
                        <span style={{ color: "red" }}>
                          {errors.district}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                
                
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="State"
                    name="state"
                    type="text"
                    size="large"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.state && touched.state ? (
                        <span style={{ color: "red" }}>
                          {errors.state}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Pin Code"
                    name="pinCode"
                    type="text"
                    size="large"
                    value={values.pinCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.pinCode && touched.pinCode ? (
                        <span style={{ color: "red" }}>
                          {errors.pinCode}
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

export default PatientProfileForm;

  