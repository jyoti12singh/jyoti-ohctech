import { apiClientPrivate } from "../api/ApiClient"
import { useEffect } from "react"
import useRefreshToken from "./useRefreshToken"
import { useAuth } from "../components/security/AuthContext"

const useAxiosPrivate = () => {

    const refresh = useRefreshToken();
    const { token } = useAuth();

    useEffect(() => {

        const requestIntercept = apiClientPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );


        const responseIntercept = apiClientPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                // getting prev request
                const prevRequest = error?.config;

                // if request is failing due to access token expired and we want to try only once so we are setting sent property true
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;

                    //getting new token
                    const newToken = await refresh();

                    // setting new token in prev request
                    prevRequest.headers['Authorization'] = `Bearer ${newToken}`;

                    // again making the request
                    return apiClientPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            apiClientPrivate.interceptors.response.eject(responseIntercept);
            apiClientPrivate.interceptors.request.eject(requestIntercept);
        }

    }, [token, refresh])

    return apiClientPrivate;
}

export default useAxiosPrivate;