import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


 const SingleSelect=({arr,label,type,value,onBlur,onChange,name,helpertext})=> {

    SingleSelect.propTypes = {
        arr:PropTypes.array.isRequired,
        label:PropTypes.string.isRequired,
        type:PropTypes.node.isRequired,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        helperText:PropTypes.node,
        value:PropTypes.string,
        name:PropTypes.string.isRequired,
        helpertext:PropTypes.node,
    }


  return (
    // <Box sx={{ minWidth: 120 }}>
    //   <FormControl fullWidth>
    //     <InputLabel id="demo-simple-select-label">{label}</InputLabel>
    //     <Select
    //       sx={{width:'250px'}}
    //       labelId="demo-simple-select-label"
    //       type={type}
    //       name={name}
    //       id="demo-simple-select"
    //       onChange={onChange}
    //       onBlur={onBlur}
    //       value={value}
    //       label={label}
    //       helperText={helpertext}
    //         >
    //         {arr.map((item,index)=>{
    //             return(
    //                 <MenuItem key={index} value={item}>{item}</MenuItem>
    //             )
    //         })}
    //     </Select>
    //   </FormControl>
    // </Box>


          <Autocomplete
            // disablePortal
            sx={{width:'250px'}}
            id="combo-box-demo"
            options={arr}
            // labelId="demo-simple-select-label"
            type={type}
            name={name}
            renderInput={(params) => <TextField {...params}  label={label} />}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            // onChange={(event, newValue) => onChange(newValue)} 
            helperText={helpertext}
          />
  );
}


export default SingleSelect;