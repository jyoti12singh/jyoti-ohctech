
import { ToastContainer, toast } from 'react-toastify';
const CustomToast = () => {

    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
            stacked
        />
    )

}


export const notifySuccess = (msg) => toast.success(msg);

export const notifyError = (msg) => toast.error(msg);

export const notifyInfo = (msg) => toast.info(msg);

export const notifyWarn = (msg) => toast.warn(msg);

export default CustomToast;