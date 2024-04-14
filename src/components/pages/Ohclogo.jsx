import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {Box,Stack,Button} from '@mui/material';
import { useRef } from "react";
import { useState } from 'react';
import no_img from '../../assets/no_image.png';
import PropTypes from 'prop-types'; 

 const Ohclogo = ({setFieldValue}) => {

  Ohclogo.propTypes = {
    setFieldValue: PropTypes.func.isRequired,
  }
  const [companylogo, setCompnanylogo] = useState();
  const fileRef = useRef();
   
  return (
    <Box
      >
      <Stack
      sx={{
        width: "175px",
        height: "180px",
        padding: "4px",
        left: "4px",
      }}
      boxShadow={4}
      >
      <img
      src={companylogo ? companylogo : no_img}
      width="175px"
      height="180px"
      alt="company_logo"
      style={{height:'180px'}}
     /> 
      </Stack>
      <input
      ref={fileRef}
      name='logo'
      accept='image/*'
      id='contained-button-file'
      type='file'
      // sx={{ display: 'none' }}
      hidden
      onChange={(e) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (fileReader.readyState === 2) {
            setFieldValue('logo', fileReader.result);
            setCompnanylogo(fileReader.result);
          }
        };
        fileReader.readAsDataURL(e.target.files[0]);
      }}
    />
       <Button
        variant="contained"
        compocomponent='label'
        // width='1px'
        size="large"
        startIcon={<CloudUploadOutlinedIcon />}
        onClick={()=>{fileRef.current.click()}}
       >
       Upload Logo
       </Button>
      </Box>
  )
}

export default Ohclogo;