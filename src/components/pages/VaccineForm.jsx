import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";



const VaccineForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    VaccineForm.propTypes = {
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
                    label="Vaccine Name"
                    name="vaccineName"
                    type="text"
                    size="large"
                    value={values.vaccineName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.vaccineName && touched.vaccineName? (
                        <span style={{ color: "red" }}>{errors.vaccineName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Company Name"
                    name="vaccineCompany"
                    type="text"
                    size="large"
                    value={values.vaccineCompany}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.vaccineCompany && touched.vaccineCompany? (
                        <span style={{ color: "red" }}>{errors.vaccineCompany}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Vaccine Description"
                    name="vaccineDesc"
                    type="text"
                    size="large"
                    value={values.vaccineDesc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.vaccineDesc && touched.vaccineDesc? (
                        <span style={{ color: "red" }}>{errors.vaccineDesc}</span>
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


export default VaccineForm;
