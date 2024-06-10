import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";


//import TextArea from "../TextArea";

const SlotsListForm =({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    SlotsListForm.propTypes ={
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


 const record=["##","## "]
 const CaseType =["#","#","#"]
 

 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <form onSubmit={handleSubmit}>
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:360}}>
       
       <Grid item xs={12}  justifyContent="center" alignItems="center">
        
         <FormControl fullWidth>
           <Grid container spacing={2} justifyContent="center" alignItems="center">
           <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center"> 

           <Input label=""
                    name="date"
                    type="date"
                    size="large"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.date && touched.date? (
                        <span style={{ color: "red" }}>{errors.date}</span>
                      ) : null
                    }
                  />
                </Grid>
             <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center"> <SingleSelect
                    arr={record}
                    label="Select Doctor Name"
                    name="doctorname"
                    value={values.doctorname}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "doctorname",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.doctorname && touched.doctorname ? (
                        <span style={{ color: "red" }}>{errors.doctorname}</span>
                      ) : null
                    }
                  />
                </Grid>
          
             
                
              
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center"> 
                <SingleSelect
                
                    arr={CaseType}
                    label="Select Case Type"
                    name="casetype"
                    value={values.casetype}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "casetype",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.casetype && touched.casetype ? (
                        <span style={{ color: "red" }}>
                          {errors.casetype}
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

export default SlotsListForm;

  