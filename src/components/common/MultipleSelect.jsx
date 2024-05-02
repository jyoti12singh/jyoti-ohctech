// import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { useState } from "react";
import PropTypes from "prop-types";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const MultipleSelect = ({ arr, label,name,onBlur,onChange,value}) => {

  MultipleSelect.propTypes = {
    arr: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    name:PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value:PropTypes.array,
  };

  return (
    // <div>
    //   <FormControl sx={{ m: 1, width: 300 }}>
    //     <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
    //     <Select
    //       labelId="demo-multiple-name-label"
    //       id="demo-multiple-name"
    //       name={name}
    //       multiple
    //       value={value}
    //       onChange={onChange}
    //       onBlur={onBlur}
    //       input={<OutlinedInput label="Name" />}
    //     >
    //       {arr.map((name, index) => (
    //         <MenuItem key={index} value={name}>
    //           {name}
    //         </MenuItem>
    //       ))}
    //     </Select>
    //   </FormControl>
    // </div>
    <Autocomplete
        multiple
        sx={{width:'250px'}}
        // id="tags-outlined"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        options={arr}
        // getOptionLabel={(option) => option}
        isOptionEqualToValue={(options, value) => options.valueOf === value.valueOf}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder="Favorites"
          />
        )}
      />
  );
};

export default MultipleSelect;
