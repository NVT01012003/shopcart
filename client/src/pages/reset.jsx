import "../styles/form.scss";

export const Reset = () => {
    return (
        <div className="signin container">
            <div className="signin-wrapper wrapper">
                <div className="form-container">
                    <h2>Reset account password</h2>
                    <span className="enter">Enter a new password</span>
                    <div className="notice"></div>
                    <input
                        className="input-password input-border"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className="input-password_confirm input-border"
                        type="password"
                        placeholder="Confirm password"
                    />
                    <div className="btn-wrapper">
                        <button className="signin-btn">Reset password</button>
                    </div>
                    <span className="register-link">Sign in</span>
                </div>
            </div>
        </div>
    );
};
