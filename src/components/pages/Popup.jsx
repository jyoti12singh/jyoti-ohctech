import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const Popup = ({ title, children, openPopup, setOpenPopup,resetForm,handleSubmit}) => {

    // const { title, children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup} maxWidth="md">
            <DialogTitle>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>{title}</Typography>
                    <Button color='error' endIcon={<CancelRoundedIcon />} onClick={() => { setOpenPopup(false) }}>Close</Button>
                </Box>

            </DialogTitle>

            <DialogContent dividers>
                {children}
            </DialogContent>

            <DialogActions>
                <Button type="submit" onClick={() => handleSubmit()} >Save</Button>
                <Button onClick={() => resetForm()}  type="reset" color='warning'>Reset</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popup;