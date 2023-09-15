import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { authInstance } from "../config/axiosConfig";
import { AuthContext } from "../context/authContext";
import Error from "../imgs/error.png";
import "../styles/form.scss";

export const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState([]);
    const { setCurrentUser } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });
    const handleSubmit = async () => {
        try {
            const { data } = await authInstance.post("/register", credentials);
            setCurrentUser((pre) => ({
                ...pre,
                country: data.element.user.country,
                user: data.element.user,
            }));
            navigate("/");
        } catch (e) {
            if (e.response.data == "Password is invalid")
                setError([
                    "Password must be contain:",
                    "length greater than or equal to 6",
                    "length less than or equal 10",
                    "a uppercase and lowercase letter",
                    "a number and special character",
                ]);
            else setError([e.response.data]);
        }
    };

    return (
        <div className="signin container">
            <div className="signin-wrapper wrapper">
                <div className="form-container">
                    <h2>Create account</h2>
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
                                    <div key={index}>
                                        <span className="dot">•</span>
                                        <span>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <input
                        className="input-first_name input-border"
                        type="text"
                        placeholder="First name"
                        value={credentials.first_name}
                        onChange={(e) =>
                            setCredentials((pre) => ({
                                ...pre,
                                first_name: e.target.value,
                            }))
                        }
                    />
                    <input
                        className="input-last_name input-border"
                        type="text"
                        placeholder="Last name"
                        value={credentials.last_name}
                        onChange={(e) =>
                            setCredentials((pre) => ({
                                ...pre,
                                last_name: e.target.value,
                            }))
                        }
                    />
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
                    <div className="btn-wrapper" onClick={() => handleSubmit()}>
                        <button className="signin-btn">Create</button>
                    </div>
                    <span className="register-link">
                        <Link to="/account">Sign in</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};
