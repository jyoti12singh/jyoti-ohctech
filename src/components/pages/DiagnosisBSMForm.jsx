import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import SingleSelect from "../common/SingleSelect";
import { useState,useEffect } from "react";
import useAxiosPrivate from '../../utils/useAxiosPrivate';

const DiagnosisBSMForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    DiagnosisBSMForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };
  const axiosClientPrivate = useAxiosPrivate();
  const [diagnosis,setDiagnosis]  = useState([]);
  const [bodySystem,setBodySystem] = useState([]);
  const diagnosisMap = new Map();

  useEffect(() => {
    const controller = new AbortController();

    const getAllOhc = async () => {
        try {
            const response = await axiosClientPrivate.get('http://localhost:8080/ailment-systems', { signal: controller.signal });
            const items = response.data.content;
                console.log(items);

                const ailment = items.map((item)=>{
                  return item.ailmentSysName;
                });
                setBodySystem(ailment);
                // console.log(ailment);

        } catch (err) {
            console.error("Failed to fetch data: ", err);
        }
    };

    getAllOhc();

    return () => {
        controller.abort();
    };

}, []);


useEffect(() => {
  const controller = new AbortController();

  const getAllOhc = async () => {
      try {
          const response = await axiosClientPrivate.get('http://localhost:8080/ailments', { signal: controller.signal });
          const items = response.data.content;
            // console.log(items);
            const diagnosisArr = items.map((item)=>{
              return item.ailmentName;
            });
            setDiagnosis(diagnosisArr);
            
          
          }
   catch (err) {
          console.error("Failed to fetch data: ", err);
      }
  };

  getAllOhc();

  return () => {
      controller.abort();
  };

}, []);




  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>
         
          <Grid item xs={12} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={diagnosis}
                    label="Diagnosis Name"
                    name="DiagnosisName"
                    value={values.DiagnosisName}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "DiagnosisName",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.DiagnosisName && touched.DiagnosisName ? (
                        <span style={{ color: "red" }}>{errors.DiagnosisName}</span>
                      ) : null
                    }
                  />
                </Grid>

               
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={bodySystem}
                    label="Slect Body System"
                    name="BodySystem"
                    value={values.BodySystem}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "BodySystem",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.BodySystem && touched.BodySystem ? (
                        <span style={{ color: "red" }}>
                          {errors.BodySystem}
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

export default DiagnosisBSMForm;

