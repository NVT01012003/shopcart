import { Link } from "react-router-dom";
import "../styles/form.scss";

export const Forgot = () => {
    return (
        <div className="signin container">
            <div className="signin-wrapper wrapper">
                <div className="form-container">
                    <h2>Reset your password</h2>
                    <span className="enter">
                        We will send you an email to reset your password
                    </span>
                    <div className="notice"></div>
                    <input
                        className="input-email input-border"
                        type="email"
                        placeholder="Email"
                    />
                    <div className="btn-wrapper">
                        <button className="signin-btn">Submit</button>
                    </div>
                    <span className="register-link">
                        <Link to="/account/signin">Cancel</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};
