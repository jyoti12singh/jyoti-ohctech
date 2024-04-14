import axios from 'axios';

const BASE_URL = 'http://localhost:8080';


export const apiClient = axios.create(
    {
        baseURL: BASE_URL,
    }
);

export const apiClientPrivate = axios.create(
    {
        baseURL: BASE_URL,
        headers: {
            'Content-type': 'application/json'
        },
        withCredentials: true

    }
);