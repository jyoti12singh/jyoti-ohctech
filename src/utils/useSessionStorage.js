import { useState, useEffect } from "react";

export const useSessionStorage = (key) => {
    const [data, setData] = useState(() => {
        const storedData = sessionStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    });

    useEffect(() => {
        const handleStorageChange = () => {
            const storedData = sessionStorage.getItem(key);
            setData(storedData ? JSON.parse(storedData) : null);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [key]);

    const updateSessionData = (newData) => {
        const updatedData = { ...data, ...newData };
        sessionStorage.setItem(key, JSON.stringify(updatedData));
        setData(updatedData);
    };

    return { sessionData: data, updateSessionData };
};
