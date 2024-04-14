import { apiClient } from "../api/ApiClient";
import { useAuth } from "../components/security/AuthContext";
import { useSessionStorage } from "./useSessionStorage";

const useRefreshToken = () => {
    const { setToken, setUserId } = useAuth();
    const {sessionData} = useSessionStorage('sessionData');
    const userId = sessionData?.userId;

    const refresh = async () => {
        try {
            const response = await apiClient.post(`/auth/refresh?userId=${userId}`, { withCredentials: true });
            if (response.status === 204) {
                // Handle case when token refresh fails (e.g., due to expired token)
                throw new Error("Token refresh failed");
            }

            setToken(response.data);
            setUserId(userId);

            return response.data;
        } catch (error) {
            console.error("Error refreshing token:", error);
            // Handle error (e.g., log, show error message)
            throw error; // Propagate the error further if needed
        }
    }

    return refresh;
}

export default useRefreshToken;
