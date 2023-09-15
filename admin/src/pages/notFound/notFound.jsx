import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./notFound.scss";

export const NotFound = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        !user.id && navigate("/login");
    }, [user.id]);
    return (
        <div className="notfound-container">
            <div className="notfound">
                <div className="notfound-404">
                    <h3>Oops! page not found</h3>
                    <h1>
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </h1>
                </div>
                <h2>We are sory, but the page you requested was not found</h2>
            </div>
        </div>
    );
};
