import { useContext, useState } from "react";
import { instance, setHeader } from "../../config/axiosConfig";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const hanleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await instance.post("/auth/admin", {
                email,
                password,
            });
            setUser(data.element.user);
            setHeader(data.element.token.split(" ")[1]);
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <form>
                    <h2 className="title">Admin Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <button onClick={hanleSubmit}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
