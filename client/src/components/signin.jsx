import Google from "../imgs/google.png";
import Facebook from "../imgs/facebook.png";
import { Link } from "react-router-dom";
import { authInstance } from "../config/axiosConfig";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import Error from "../imgs/error.png";
import "../styles/form.scss";

export const SignIn = () => {
    const [error, setError] = useState([]);
    const { setCurrentUser } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const handleGoogle = async () => {
        const { data } = await authInstance.get("/google");
        if (data.status === "ok") window.location.assign(data.url);
        else console.log(data);
    };
    const handleFacebook = async () => {
        const { data } = await authInstance.get("/facebook");
        if (data.status === "ok") window.location.assign(data.url);
        else console.log(data);
    };
    const handleSubmit = async () => {
        try {
            const { data } = await authInstance.post("/signin", credentials);
            setCurrentUser((pre) => ({
                ...pre,
                country: data.element.user.country,
                user: data.element.user,
            }));
        } catch (e) {
            setError([e.response.data]);
        }
    };

    return (
        <div className="signin container">
            <div className="signin-wrapper wrapper">
                <div className="form-container">
                    <h2>Login</h2>
                    {error && (
                        <div className="notice">
                            {error.length > 0 && (
                                <div className="error">
                                    <img src={Error} alt="error-icon" />
                                    <span>{error[0]}</span>
                                </div>
                            )}
                            <div>
                                {error.slice(1).map((value, index) => (
                                    <span key={index}> • {value}</span>
                                ))}
                            </div>
                        </div>
                    )}
                    <input
                        className="input-email input-border"
                        type="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={(e) =>
                            setCredentials((pre) => ({
                                ...pre,
                                email: e.target.value,
                            }))
                        }
                    />
                    <input
                        className="input-password input-border"
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) =>
                            setCredentials((pre) => ({
                                ...pre,
                                password: e.target.value,
                            }))
                        }
                    />
                    <span className="forgot-password">
                        <Link to="/account/forgot">Forgot your password?</Link>
                    </span>
                    <div className="btn-wrapper" onClick={() => handleSubmit()}>
                        <button className="signin-btn">Sign in</button>
                    </div>
                    <span className="or">Or</span>
                    <div className="social-login-wrapper">
                        <div
                            className="google-btn social-btn"
                            onClick={() => handleGoogle()}
                        >
                            <img src={Google} alt="google" />
                            <span>Sign in with google</span>
                        </div>
                        <div
                            className="facebook-btn social-btn"
                            onClick={() => handleFacebook()}
                        >
                            <img src={Facebook} alt="facebook" />
                            <span>Sign in with facebook</span>
                        </div>
                    </div>
                    <span className="register-link">
                        <Link to="/account/signup">Create account</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};
