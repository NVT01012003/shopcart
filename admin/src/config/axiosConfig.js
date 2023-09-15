import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true,
});

export const setHeader = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return token;
};
