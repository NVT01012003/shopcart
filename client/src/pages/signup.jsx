import { Link } from "react-router-dom";
import "../styles/form.scss";

export const SignUp = () => {
    return (
        <div className="signin container">
            <div className="signin-wrapper wrapper">
                <div className="form-container">
                    <h2>Create account</h2>
                    <div className="notice"></div>
                    <input
                        className="input-first_name input-border"
                        type="text"
                        placeholder="First name"
                    />
                    <input
                        className="input-last_name input-border"
                        type="text"
                        placeholder="Last name"
                    />
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
                    <div className="btn-wrapper">
                        <button className="signin-btn">Create</button>
                    </div>
                    <span className="register-link">
                        <Link to="/account/signin">Sign in</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};
