
import { FormControl, Stack, Box } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
// import SingleSelect from "../common/SingleSelect"
// import MultipleSelect from "../common/MultipleSelect";


const AilmentSystemForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
  AilmentSystemForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  // const statusSelect = ["Active", "Not Active"];
  // const isDefault = ["Yes", "No"];



  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          justifyItems: "center",
          gap: "25px",
        }}
        m={2}
      >

        <FormControl
          sx={{
             top: "1px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            columnGap: "5px",
            gap: "5px",
            width: "100%",
          }}
          spacing={1}
          // flexWrap="wrap"
          // useFlexGap
          onSubmit={handleSubmit}
        >
          <h2>Ailment System Name</h2>
          <Stack direction="row" spacing={1}>
            <Input
              label="Enter ailment Name"
              name="ailmentSysName"
              type="text"
              size="large"
              value={values.ailmentSysName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ailmentSysName && touched.ailmentSysName ? (
                  <span style={{ color: "red" }}>{errors.ailmentSysName}</span>
                ) : null
              }
            />    
          </Stack>

          <h2>Ailment System Description</h2>
          <Stack direction="row" spacing={2}>
            <Input
              label="Enter Ailment Description"
              name="ailmentSysDesc"
              type="text"
              size="large"
              value={values.ailmentSysDesc}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ailmentSysDesc && touched.ailmentSysDesc ? (
                  <span style={{ color: "red" }}>{errors.ailmentSysDesc}</span>
                ) : null
              }
            />   
          </Stack>

          <h2>Ailment System Code</h2>
          <Stack direction="row" spacing={2}>
            <Input
              label="Enter Ailment Code"
              name="ailmentSysCode"
              type="text"
              size="large"
              value={values.ailmentSysCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ailmentSysCode && touched.ailmentSysCode ? (
                  <span style={{ color: "red" }}>{errors.ailmentSysCode}</span>
                ) : null
              }
            /> 
          </Stack>

        </FormControl>
      </Box>
    </form>
  );
};

export default AilmentSystemForm;
