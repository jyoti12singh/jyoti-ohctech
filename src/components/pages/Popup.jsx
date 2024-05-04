import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import PropTypes from "prop-types";
const Popup = ({showupdate,setShowupdate,id,handleUpdate, title, children, openPopup, setOpenPopup,resetForm,handleSubmit}) => {

    // const { title, children, openPopup, setOpenPopup } = props;

  Popup.propTypes = {
    id : PropTypes.number.isRequired,
  }


    return (
        <Dialog open={openPopup} maxWidth="md">
            <DialogTitle>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>{title}</Typography>
                    <Button color='error' endIcon={<CancelRoundedIcon />} onClick={() => {  setOpenPopup(false) }}>Close</Button>
                </Box>

            </DialogTitle>

            <DialogContent dividers>
                {children}
            </DialogContent>

            <DialogActions>
                <Button type="submit" onClick={()=> handleUpdate(id)}  variant="outlined" style={{display : showupdate ? "null" : "none" }}>Update</Button>
                <Button type="submit" onClick={() => handleSubmit()}  variant="outlined" style={{display : showupdate ? "none" : "null" }}>Save</Button>
                <Button onClick={() => resetForm()}  type="reset" color='warning'  variant="outlined">Reset</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popup;