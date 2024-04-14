import { createContext, useContext, useState } from "react";
import { apiClient } from "../../api/ApiClient";
import { notifyError, notifySuccess } from "../pages/CustomToast";
// context created 
export const AuthContext = createContext();

// custom hook to use this context
export const useAuth = () => useContext(AuthContext);

//sharing the context with other components
const AuthProvider = ({ children }) => {

    const [userId, setUserId] = useState('');

    const [token, setToken] = useState('');

    const login = async (loginData) => {

        try {
            const response = await apiClient.post('/auth/login', loginData);

            if (response.status == 200) {
                console.log(response);
                // notifySuccess(response.data.message);

                const jwtToken = response.data.token;
                setToken(jwtToken);
                setUserId(response.data.userId);

                sessionStorage.setItem("sessionData", JSON.stringify({ userId: response.data.userId }));

                return true;
            }
            else {
                console.log("in else");
                console.log(response);
                logout();
                // notifyError(response.data.message);
                return false;
            }
        }catch(error){
            console.log("Network error occurred:", error.message);
            return false;
        }

    }

    const logout = () => {
        setToken('');
        setUserId('');
        sessionStorage.removeItem("sessionData");
    }

    return (
        <AuthContext.Provider value={{ login, logout, userId, token, setToken, setUserId }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;