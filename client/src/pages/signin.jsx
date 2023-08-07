import Google from "../imgs/google.png";
import Facebook from "../imgs/facebook.png";
import { Link } from "react-router-dom";

import "../styles/form.scss";

export const SignIn = () => {
    return (
        <div className="signin container">
            <div className="signin-wrapper wrapper">
                <div className="form-container">
                    <h2>Login</h2>
                    <div className="notice"></div>
                    <input
                        className="input-email input-border"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="input-password input-border"
                        type="password"
                        placeholder="Password"
                    />
                    <span className="forgot-password">
                        Forgot your password?
                    </span>
                    <div className="btn-wrapper">
                        <button className="signin-btn">Sign in</button>
                    </div>
                    <span className="or">Or</span>
                    <div className="social-login-wrapper">
                        <div className="google-btn social-btn">
                            <img src={Google} alt="google" />
                            <span>Sign in with google</span>
                        </div>
                        <div className="facebook-btn social-btn">
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
