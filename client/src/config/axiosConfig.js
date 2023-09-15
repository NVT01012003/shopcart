import axios from "axios";

export const privateInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
});
export const publicInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
});
export const authInstance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
});
