import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";
//import Input from "./Input";

//import Input from "../Input";

const CheckupParameterForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    CheckupParameterForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

 const healthkeyselect=["Capital/non consumeble instruments","other"]
 const lessriskselect=["Active","Not Active"]
 const moreriskselect=["Active","Not Active"]
 const lessadviceselect=["Active","Not Active"]
 const moreadviceselect=["Active","Not Active"]
 const sectionselect=["I","II","III"]
 const inputtypeselect=["Text","Number"]
 const statusselect=["Lower","Middle"]
 const editableselect=["Yes","No"]
 const unitselect=["Yes","No"]
 const paramselect=["opd","daycare","injury"]
 const rulesselect=["Yes","No"]
 const parentselect=["Yes","No"]
 const mandatoryselect=["Yes","No"]
 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={0} justifyContent="center" alignItems="center"  >
        
          <Grid itemxs={2} sm={10}  justifyContent="center" alignItems="center">
            <FormControl Width={100*100}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Checkup Parameter Name"
                    name="cpname"
                    type="text"
                    size="large"
                    value={values.cpname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.cpname && touched.cpname ? (
                        <span style={{ color: "red" }}>{errors.cpname}</span>
                      ) : null
                    }
                  />
                  
                </Grid>
                
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={healthkeyselect}
                    label="Health Key Name"
                    name="healthkeyname"
                    value={values.healthkeyname}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "healthkeyname",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.healthkeyname && touched.healthkeyname ? (
                        <span style={{ color: "red" }}>{errors.healthkeyname}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"   alignItems="center">
                <Input
                    label="Starting Range"
                    name="startingrange"
                    type="text"
                    size="large"
                    value={values.startingrange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.startingrange && touched.startingrange ? (
                        <span style={{ color: "red" }}>
                          {errors.startingrange}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                <Input
                    label="Ending Range"
                    name="endingrange"
                    type="text"
                    size="large"
                    value={values.endingrange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.endingrange && touched.endingrange ? (
                        <span style={{ color: "red" }}>
                          {errors.endingrange}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={lessriskselect}
                    label="Less Risk"
                    name="lessrisk"
                    value={values.lessrisk}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "lessrisk",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.lessrisk && touched.lessrisk ? (
                        <span style={{ color: "red" }}>{errors.lessrisk}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={moreriskselect}
                    label="More Risk"
                    name="morerisk"
                    value={values.highrisk}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "morerisk",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.morerisk && touched.morerisk ? (
                        <span style={{ color: "red" }}>{errors.morerisk}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={lessadviceselect}
                    label="Less Advice"
                    name="lessadvice"
                    value={values.lessadvice}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "lessadvice",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.lessadvice && touched.lessadvice ? (
                        <span style={{ color: "red" }}>{errors.lessadvice}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={moreadviceselect}
                    label="More Advice"
                    name="moreadvice"
                    value={values.moreadvice}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "moreadvice",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.moreadvice && touched.moreadvice ? (
                        <span style={{ color: "red" }}>{errors.moreadvice}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={sectionselect}
                    label="Section"
                    name="section"
                    value={values.section}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "section",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.section && touched.section ? (
                        <span style={{ color: "red" }}>{errors.section}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Column Order"
                    name="columnorder"
                    type="text"
                    size="large"
                    value={values.columnorder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.columnorder && touched.columnorder ? (
                        <span style={{ color: "red" }}>
                          {errors.columnorder}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Placeholder"
                    name="placeholder"
                    type="text"
                    size="large"
                    value={values.placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.placeholder && touched.placeholder ? (
                        <span style={{ color: "red" }}>
                          {errors.placeholder}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Parameter Value Name"
                    name="parametervaluename"
                    type="text"
                    size="large"
                    value={values.parametervaluename}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.parametervaluename && touched.parametervaluename ? (
                        <span style={{ color: "red" }}>
                          {errors.parametervaluename}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={inputtypeselect}
                    label="Input Type "
                    name="inputtype"
                    value={values.inputtype}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "inputtype",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.inputtype && touched.inputtype ? (
                        <span style={{ color: "red" }}>{errors.inputtype}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Checkup Type"
                    name="checkuptype"
                    type="text"
                    size="large"
                    value={values.checkuptype}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.checkuptype && touched.checkuptype ? (
                        <span style={{ color: "red" }}>
                          {errors.checkuptype}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={statusselect}
                    label="Status "
                    name="status"
                    value={values.status}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "status",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.status && touched.status ? (
                        <span style={{ color: "red" }}>{errors.status}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={editableselect}
                    label="Editable/ Non Edital Field "
                    name="edit"
                    value={values.edit}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "edit",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.edit && touched.edit ? (
                        <span style={{ color: "red" }}>{errors.edit}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={unitselect}
                    label="Select Unit "
                    name="selectunit"
                    value={values.selectunit}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "selectunit",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.selectunit && touched.selectunit ? (
                        <span style={{ color: "red" }}>{errors.selectunit}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                 
                  <Input
                    label="Ref Range"
                    name="refrange"
                    type="text"
                    size="large"
                    value={values.refrange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.refrange && touched.refrange ? (
                        <span style={{ color: "red" }}>
                          {errors.refrange}
                        </span>
                      ) : null
                    }
                  />
                
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={paramselect}
                    label="Is OPD Param ? "
                    name="opd"
                    value={values.opd}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "opd",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.opd && touched.opd ? (
                        <span style={{ color: "red" }}>{errors.opd}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={paramselect}
                    label="Is DayCare Param ? "
                    name="daycare"
                    value={values.daycare}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "daycare",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.daycare && touched.daycare ? (
                        <span style={{ color: "red" }}>{errors.daycare}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={paramselect}
                    label="Is Injury Param ? "
                    name="injury"
                    value={values.injury}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "injury",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.injury && touched.injury ? (
                        <span style={{ color: "red" }}>{errors.injury}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={rulesselect}
                    label="Range Rules"
                    name="rangerule"
                    value={values.rangerule}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "rangerule",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.rangerule && touched.rangerule ? (
                        <span style={{ color: "red" }}>{errors.rangerule}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={parentselect}
                    label="Parent Param "
                    name="parent"
                    value={values.parent}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "parent",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.parent && touched.parent ? (
                        <span style={{ color: "red" }}>{errors.parent}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={mandatoryselect}
                    label="Mandatory ?"
                    name="mandatory"
                    value={values.mandatory}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "mandatory",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.mandatory && touched.mandatory ? (
                        <span style={{ color: "red" }}>{errors.mandatory}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Default Value"
                    name="default"
                    type="text"
                    size="large"
                    value={values.default}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.default && touched.default ? (
                        <span style={{ color: "red" }}>
                          {errors.default}
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

export default CheckupParameterForm;

  