import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from "prop-types";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function MultiCheckbox({ arr, label,name,onBlur,onChange,value}) {

    MultiCheckbox.propTypes = {
        arr: PropTypes.array.isRequired,
        label: PropTypes.string.isRequired,
        name:PropTypes.string,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        value:PropTypes.array,
      };
      

  return (
    <Autocomplete
      multiple
      sx={{width:'250px'}}
    //   id="checkboxes-tags-demo"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      options={arr}
    //   disableCloseOnSelect
    isOptionEqualToValue={(options, value) => options.valueOf === value.valueOf}
      // getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      
      renderInput={(params) => (
        <TextField {...params} label={label}  />
      )}
    />
  );
}


