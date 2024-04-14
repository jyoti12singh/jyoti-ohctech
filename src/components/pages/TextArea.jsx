import {TextField} from '@mui/material'

 const TextArea = ()=> {
  return (
    <TextField
  placeholder="Enter TextArea"
  multiline
  minRows={2}
  maxRows={Infinity}
/>
  )
}

export default TextArea;