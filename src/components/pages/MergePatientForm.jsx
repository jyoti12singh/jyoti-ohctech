import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";


//import TextArea from "../TextArea";

const MergePatientForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    MergePatientForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


 const record=["##","## "]
 const Patient=["#","#","#"]
 

 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <form onSubmit={handleSubmit}>
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:360}}>
       
       <Grid item xs={12}  justifyContent="center" alignItems="center">
         <FormControl fullWidth>
           <Grid container spacing={2} justifyContent="center" alignItems="center">
             <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center"> <SingleSelect
                    arr={record}
                    label="Patient Record To Be Used"
                    name="used"
                    value={values.used}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "used",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.used && touched.used ? (
                        <span style={{ color: "red" }}>{errors.used}</span>
                      ) : null
                    }
                  />
                </Grid>
          
             
                
              
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center"> 
                <SingleSelect
                
                    arr={Patient}
                    label="Patient Record To Be Merged"
                    name="merged"
                    value={values.merged}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "merged",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.merged && touched.merged ? (
                        <span style={{ color: "red" }}>
                          {errors.merged}
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

export default MergePatientForm;

  