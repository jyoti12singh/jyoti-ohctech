import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";


//import TextArea from "../TextArea";

const BioMedicalWasteForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    BioMedicalWasteForm.propTypes ={
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


 const Agency=["##","# "]
 const Collected=["#","##","##"]


 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <form onSubmit={handleSubmit}>
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:580}}>
       
       <Grid item xs={12}  justifyContent="center" alignItems="center">
         <FormControl fullWidth>
           <Grid container spacing={2} justifyContent="center" alignItems="center">
               <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
              <SingleSelect
                    arr={Agency}
                    label="Select Disposal Agency"
                    name="agency"
                    value={values.agency}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "agency",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.agency && touched.agency ? (
                        <span style={{ color: "red" }}>{errors.agency}</span>
                      ) : null
                    }
                  />
                </Grid>
             
              
                
              
                  <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Collected}
                    label="Collected By"
                    name="collected"
                    value={values.collected}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "collected",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.collected && touched.collected ? (
                        <span style={{ color: "red" }}>
                          {errors.collected}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                  <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Surveillance By"
                    name="surveillance"
                    type="text"
                    size="large"
                    value={values.surveillance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.surveillance && touched.surveillance ? (
                        <span style={{ color: "red" }}>
                          {errors.surveillance}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                  <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Remarks"
                    name="remark"
                    type="text"
                    size="large"
                    value={values.remark}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.remark && touched.remark ? (
                        <span style={{ color: "red" }}>{errors.remark}</span>
                      ) : null
                    }
                  />
                </Grid>
                  <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
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
                        <span style={{ color: "red" }}>{errors.date}</span>
                      ) : null
                    }
                  />
                </Grid>
                  <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Yellow(in Kg)"
                    name="yellow"
                    type="number"
                    size="large"
                    value={values.yellow}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.yellow && touched.yellow ? (
                        <span style={{ color: "red" }}>{errors.yellow}</span>
                      ) : null
                    }
                  />
                </Grid>
                  <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Red(in Kg)"
                    name="red"
                    type="number"
                    size="large"
                    value={values.red}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.red && touched.red ? (
                        <span style={{ color: "red" }}>{errors.red}</span>
                      ) : null
                    }
                  />
                </Grid>
                  <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Blue(in Kg)"
                    name="blue"
                    type="number"
                    size="large"
                    value={values.blue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.blue && touched.blue ? (
                        <span style={{ color: "red" }}>{errors.blue}</span>
                      ) : null
                    }
                  />
                </Grid>
                  <Grid item xs={12} sm={6}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="White(in Kg)"
                    name="white"
                    type="number"
                    size="large"
                    value={values.white}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.white && touched.white ? (
                        <span style={{ color: "red" }}>{errors.white}</span>
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

export default BioMedicalWasteForm;

  