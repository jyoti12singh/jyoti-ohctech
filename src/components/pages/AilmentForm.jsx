
import { FormControl, Stack, Box } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";

const AilmentForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  AilmentForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  const statusSelect = ["Active", "Not Active"];
  const isDefault = ["Yes", "No"];



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
          <h2>Ailment Name</h2>
          <Stack direction="row" spacing={1}>
            <Input
              label="Enter ailment Name"
              name="ailmentName"
              type="text"
              size="large"
              value={values.ailmentName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ailmentName && touched.ailmentName ? (
                  <span style={{ color: "red" }}>{errors.ailmentName}</span>
                ) : null
              }
            />    
          </Stack>

          <h2>Ailment Description</h2>
          <Stack direction="row" spacing={2}>
            <Input
              label="Enter Ailment Description"
              name="ailmentDescription"
              type="text"
              size="large"
              value={values.ailmentDescription}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ailmentDescription && touched.ailmentDescription ? (
                  <span style={{ color: "red" }}>{errors.ailmentDescription}</span>
                ) : null
              }
            />   
          </Stack>

          <h2>Ailment Code</h2>
          <Stack direction="row" spacing={2}>
            <Input
              label="Enter Ailment Code"
              name="ailmentCode"
              type="text"
              size="large"
              value={values.ailmentCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ailmentCode && touched.ailmentCode ? (
                  <span style={{ color: "red" }}>{errors.ailmentCode}</span>
                ) : null
              }
            /> 
          </Stack>

          <h2>Is Active</h2>
          <Stack direction="row" spacing={2}>
          <SingleSelect
                    arr={isDefault}
                    label="status"
                    name="statusType"
                    value={values.statusType}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "statusType",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.statusType && touched.statusType ? (
                        <span style={{ color: "red" }}>{errors.statusType}</span>
                      ) : null
                    }
                  />
          </Stack>


        </FormControl>
      </Box>
    </form>
  );
};

export default AilmentForm;
