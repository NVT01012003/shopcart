import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { authInstance } from "../config/axiosConfig";
import "../styles/fetch.scss";

export const FetchUser = ({ error }) => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const { setError } = error;
    useEffect(() => {
        (async () => {
            const { data } = await authInstance.get("/fetch-user");
            if (data.message == "OK")
                setCurrentUser((pre) => ({
                    ...pre,
                    user: data.element.user,
                    token: data.element.token,
                }));
            else
                setError(() => {
                    setTimeout(() => {
                        setError(false);
                    }, 4000);
                    setError(true);
                });
        })();
    }, []);

    return (
        <div className="loader-container">
            <span className="loader"></span>
        </div>
    );
};
