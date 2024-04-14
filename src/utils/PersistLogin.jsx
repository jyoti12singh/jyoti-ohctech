import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "./useRefreshToken";
import { useAuth } from "../components/security/AuthContext";
import { Box, CircularProgress } from "@mui/material";

const PersistLogin = () => {

    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { token } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const response = await refresh();
                if (response.status === 204) {
                    // Remove session data if the refresh token is not valid
                    sessionStorage.removeItem("sessionData");
                }

                console.log("inside try", response.status);
            } catch (err) {
                // console.log(err);
                // if refresh token is not valid then remove this value
                sessionStorage.removeItem("sessionData");

            }
            finally {
                setIsLoading(false);
            }
        }

        if (token === undefined || token.length === 0) {
            // console.log("inside if");
            verifyRefreshToken();
        } else {
            setIsLoading(false);
            // console.log("inside else");
        }

    }, [token, refresh]);

    useEffect(() => {
        // console.log(`isLoading : ${isLoading}`);
        // console.log(`at : ${JSON.stringify(token)}`);
    }, [isLoading, token]);

    return (
        <>
            {isLoading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', weight: '100vw' }}>
                <CircularProgress size={100} />
            </Box> : <Outlet />}
        </>
    )
}

export default PersistLogin;
