
import { FormControl, Stack, Box } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";


const MedicineTimingForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    MedicineTimingForm.propTypes = {
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
          <h2>Medicine Timing</h2>
          <Stack direction="row" spacing={2}>
            <Input
              label="Enter Medicine Timing"
              name="MedicineTiming"
              type="time"
              size="large"
              value={values.MedicineTiming}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.MedicineTiming && touched.MedicineTiming ? (
                  <span style={{ color: "red" }}>{errors.MedicineTiming}</span>
                ) : null
              }
            />

            
          </Stack>

          <h2>Timing Description</h2>
          <Stack direction="row" spacing={2}>
            <Input
              label="Enter Timing Description"
              name="timingDescription"
              type="text"
              size="large"
              value={values.timingDescription}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.timingDescription && touched.timingDescription ? (
                  <span style={{ color: "red" }}>{errors.timingDescription}</span>
                ) : null
              }
            />
            
          </Stack>

        </FormControl>
      </Box>
    </form>
  );
};

export default MedicineTimingForm;
