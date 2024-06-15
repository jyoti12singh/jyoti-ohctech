import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
// import MultipleSelect from "../common/MultipleSelect";
import SingleSelect from "../common/SingleSelect"


const AbnormalityForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    AbnormalityForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


  // const Medselect = ["Active", "Not Active"];
  // const isDefault = ["Yes", "No"];
  const multiselect = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Enter the Abnormality name"
                    name="abnormalityName"
                    type="text"
                    size="large"
                    value={values.abnormalityName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.abnormalityName && touched.abnormalityName? (
                        <span style={{ color: "red" }}>{errors.abnormalityName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
              
                <SingleSelect
                arr={multiselect}
                label="Wellness Programs"
                name="wellnessProgram"
                value={values.wellnessProgram}
                onChange={(event, newValue) => {
                  const syntheticEvent = {
                    target: {
                      name: "wellnessProgram",
                      value: newValue,
                    },
                  };
                  handleChange(syntheticEvent);
                }}
                onBlur={handleBlur}
                type="text"
                helperText={
                  errors.wellnessProgram && touched.wellnessProgram ? (
                    <span style={{ color: "red" }}>{errors.wellnessProgram}</span>
                  ) : null
                }
              />
            {/*<MultipleSelect
              arr={multiselect}
              label="Wellness Programs"
              name="wellnessProgram"
              value={values.wellnessProgram}
              // onChange={handleChange}
              onChange={(event, newValue) => {
                const syntheticEvent = {
                  target: {
                    name: 'wellnessProgram',
                    value: newValue,
                  },
                };
                handleChange(syntheticEvent);
              }}
              onBlur={handleBlur}
            />*/}

            {/* <Autocomplete
            // disablePortal
            id="combo-box-demo"
            options={homeselect}
            label="Ohc"
            name="ohc"
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Ohc" />}
            value={values.ohc}
            onChange={(event, newValue) => {
              const syntheticEvent = {
                target: {
                  name: 'ohc',
                  value: newValue,
                },
              };
              handleChange(syntheticEvent);
            }}
          /> */}

                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};


export default AbnormalityForm;
