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

 const genderselect=["Femail","Mail","Third Gender"]
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
                    name="pname"
                    type="text"
                    size="large"
                    value={values.pname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.pname && touched.pname ? (
                        <span style={{ color: "red" }}>
                          {errors.pname}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                <Input
                    label="Father's/Husband Name"
                    name="fhname"
                    type="text"
                    size="large"
                    value={values.fhname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.fhname && touched.fhname ? (
                        <span style={{ color: "red" }}>
                          {errors.fhname}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label=""
                    name="date"
                    type="date"
                    size="large"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.date && touched.date ? (
                        <span style={{ color: "red" }}>
                          {errors.date}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={genderselect}
                    label="Gender"
                    name="genderchoose"
                    value={values.genderchoose}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "genderchoose",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.genderchoose && touched.genderchoose ? (
                        <span style={{ color: "red" }}>{errors.genderchoose}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={bloodgroupselect}
                    label="Blood Group"
                    name="blood"
                    value={values.blood}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "blood",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.blood && touched.blood ? (
                        <span style={{ color: "red" }}>{errors.blood}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Aadhar Number"
                    name="aadhar"
                    type="text"
                    size="large"
                    value={values.aadhar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.aadhar && touched.aadhar ? (
                        <span style={{ color: "red" }}>
                          {errors.aadhar}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="text"
                    size="large"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.phone && touched.phone ? (
                        <span style={{ color: "red" }}>
                          {errors.phone}
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
                    name="pin"
                    type="text"
                    size="large"
                    value={values.pin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.pin && touched.pin ? (
                        <span style={{ color: "red" }}>
                          {errors.pin}
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

  