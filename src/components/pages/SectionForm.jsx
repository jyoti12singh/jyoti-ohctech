import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";


const SectionForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
  SectionForm.propTypes = {
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
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
       
          <Grid item xs={12} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Bussiness Unit"
                    name="buId"
                    type="text"
                    size="large"
                    value={values.buId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.buId && touched.buId ? (
                        <span style={{ color: "red" }}>{errors.buId}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Department Name"
                    name="deptId"
                    type="text"
                    size="large"
                    value={values.deptId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.deptId && touched.deptId ? (
                        <span style={{ color: "red" }}>
                          {errors.deptId}
                        </span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Section Name"
                    name="sectionName"
                    type="text"
                    size="large"
                    value={values.sectionName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.sectionName && touched.sectionName ? (
                        <span style={{ color: "red" }}>{errors.sectionName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Section Head"
                    name="sectionHeadName"
                    type="text"
                    size="large"
                    value={values.sectionHeadName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.sectionHeadName && touched.sectionHeadName ? (
                        <span style={{ color: "red" }}>{errors.sectionHeadName}</span>
                      ) : null
                    }
                  />
                </Grid>
            
          
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Email "
                    name="sectionHeadEmail"
                    type="text"
                    size="large"
                    value={values.sectionHeadEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.sectionHeadEmail && touched.sectionHeadEmail ? (
                        <span style={{ color: "red" }}>
                          {errors.sectionHeadEmail}
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

export default SectionForm;
