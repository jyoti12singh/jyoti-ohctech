import Ohclogo from "./Ohclogo";
import { FormControl, Stack, Box, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "./Input";
import SingleSelect from "./SingleSelect";
import MultipleSelect from "./MultipleSelect";
// import TextArea from "./TextArea";
// import { useState } from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";


const OhcForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  OhcForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

    

  // const [homeohc, setHomeohc] = useState([]);
  // const homeselect = ["Yes", "No"];
  const ohcselect = ["Student", "Employee"];
  const Categoryselect = ["Ohc center", "Ambulance", "First Aid Box", "Other"];

  // const multiselect = [
  //   "Oliver Hansen",
  //   "Van Henry",
  //   "April Tucker",
  //   "Ralph Hubbard",
  //   "Omar Alexander",
  //   "Carlos Abbott",
  //   "Miriam Wagner",
  //   "Bradley Wilkerson",
  //   "Virginia Andrews",
  //   "Kelly Snyder",
  // ];


  // const [ohc, setOhc]  = useState("");
  

  // const top100Films = [
  //   { label: 'The Shawshank Redemption', year: 1994 },
  //   { label: 'The Godfather', year: 1972 },
  //   { label: 'The Godfather: Part II', year: 1974 },
  //   { label: 'The Dark Knight', year: 2008 },
  //   { label: '12 Angry Men', year: 1957 },
  //   { label: "Schindler's List", year: 1993 },
  //   { label: 'Pulp Fiction', year: 1994 },
  //   {
  //     label: 'The Lord of the Rings: The Return of the King',
  //     year: 2003,
  //   },
  // ];

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
        <Stack>
          <Ohclogo setFieldValue={setFieldValue} />
        </Stack>
        <FormControl
          sx={{
            // top: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "10px",
            gap: "10px",
            width: "100%",
          }}
          spacing={2}
          // flexWrap="wrap"
          // useFlexGap
          onSubmit={handleSubmit}
        >
          <Stack direction="row" spacing={2}>
            <Input
              label="Ohc Name"
              name="ohcName"
              type="text"
              size="large"
              value={values.ohcName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ohcName && touched.ohcName ? (
                  <span style={{ color: "red" }}>{errors.ohcName}</span>
                ) : null
              }
            />

            <Input
              label="Description"
              name="ohcDescription"
              type="text"
              size="large"
              value={values.ohcDescription}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ohcDescription && touched.ohcDescription ? (
                  <span style={{ color: "red" }}>{errors.ohcDescription}</span>
                ) : null
              }
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Input
              label="OHC Code"
              name="ohcCode"
              type="text"
              size="large"
              value={values.ohcCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ohcCode && touched.ohcCode ? (
                  <span style={{ color: "red" }}>{errors.ohcCode}</span>
                ) : null
              }
            />
            <Input
            
              label="State Code"
              name="state"
              type="number"
              size="large"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.state && touched.state ? (
                  <span style={{ color: "red" }}>{errors.state}</span>
                ) : null
              }
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Input
              label="Pin Code"
              name="pinCode"
              type="number"
              size="large"
              value={values.pinCode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.pinCode && touched.pinCode ? (
                  <span style={{ color: "red" }}>{errors.pinCode}</span>
                ) : null
              }
            />
            <Input
              label="Fax"
              name="fax"
              type="text"
              size="large"
              value={values.fax}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.fax && touched.fax ? (
                  <span style={{ color: "red" }}>{errors.fax}</span>
                ) : null
              }
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Input
              label="Primary Phone"
              name="primaryPhone"
              type="number"
              size="large"
              value={values.primaryPhone}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.primaryPhone && touched.primaryPhone ? (
                  <span style={{ color: "red" }}>{errors.primaryPhone}</span>
                ) : null
              }
            />
            <Input
              label="Email ID"
              name="primaryEmail"
              type="text"
              size="large"
              value={values.primaryEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.primaryEmail && touched.primaryEmail ? (
                  <span style={{ color: "red" }}>{errors.primaryEmail}</span>
                ) : null
              }
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Input
              label="Icon Color"
              name="iconColor"
              type="text"
              size="large"
              value={values.iconColor}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.iconColor && touched.iconColor ? (
                  <span style={{ color: "red" }}>{errors.iconColor}</span>
                ) : null
              }
            />
            <Input
              label="Icon Text"
              name="iconText"
              type="text"
              size="large"
              value={values.iconText}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.iconText && touched.iconText ? (
                  <span style={{ color: "red" }}>{errors.iconText}</span>
                ) : null
              }
            />
          </Stack>
         <Stack direction="row" spacing={2}>
            {/*<SingleSelect
              arr={homeselect}
              label="Select Home OHC"
              name="homeohc"
              value={values.homeohc}
              onChange={(event, newValue) => {
                const syntheticEvent = {
                  target: {
                    name: 'homeohc', 
                    value: newValue, 
                  },
                };
                handleChange(syntheticEvent); 
              }}
              onBlur={handleBlur}
              type="text"
              helperText={
                errors.homeohc && touched.homeohc ? (
                  <span style={{ color: "red" }}>{errors.homeohc}</span>
                ) : null
              }
            />*/}

            <SingleSelect
              arr={ohcselect}
              label="Select OHC TYPE"
              name="ohcType"
              value={values.ohcType}
              onChange={(event, newValue) => {
                const syntheticEvent = {
                  target: {
                    name: 'ohcType', 
                    value: newValue, 
                  },
                };
                handleChange(syntheticEvent); 
              }}
              onBlur={handleBlur}
              type="text"
              helperText={
                errors.ohcType && touched.ohcType ? (
                  <span style={{ color: "red" }}>{errors.ohcType}</span>
                ) : null
              }
            />
            </Stack>
          <Stack direction="row" spacing={2}>
            <Input
              label="Address"
              name="address"
              type="text"
              size="large"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.address && touched.address ? (
                  <span style={{ color: "red" }}>{errors.address}</span>
                ) : null
              }
            />

            <SingleSelect
              arr={Categoryselect}
              label="OHC Category"
              name="ohcCategory"
              value={values.ohcCategory}
              onChange={(event, newValue) => {
                const syntheticEvent = {
                  target: {
                    name: 'ohcCategory', 
                    value: newValue, 
                  },
                };
                handleChange(syntheticEvent); 
              }}
              // onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              helperText={
                errors.ohcCategory && touched.ohcCategory ? (
                  <span style={{ color: "red" }}>{errors.ohcCategory}</span>
                ) : null
              }
            />
            {/*<Input
              label="OHC Category"
              name="ohccategory"
              type="text"
              size="large"
              select
              value={values.ohccategory}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.ohccategory && touched.ohccategory ? (
                  <span style={{ color: "red" }}>{errors.ohccategory}</span>
                ) : null
              }
            >
              <MenuItem value="Ohc center">Ohc center</MenuItem>
              <MenuItem value="Ambulance">Ambulance</MenuItem>
              <MenuItem value="First Aid Box">First Aid Box</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Input>*/}
          </Stack>
          {/*<Stack direction="row" spacing={2}>
            <MultipleSelect
              arr={multiselect}
              label="Name"
              name="mutltiname"
              value={values.mutltiname}
              // onChange={handleChange}
              onChange={(event, newValue) => {
                const syntheticEvent = {
                  target: {
                    name: 'mutltiname', 
                    value: newValue, 
                  },
                };
                handleChange(syntheticEvent); 
              }}
              onBlur={handleBlur}
            />

            <Autocomplete
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
          />
            
          </Stack>
          <Stack direction="row" spacing={2}>
           <MultiCheckbox
           />
          <MultiCheckbox />
          </Stack>*/}

        </FormControl>
      </Box>
    </form>
  );
};

export default OhcForm;
