import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { Reset } from "./pages/reset";
import { Forgot } from "./pages/forgot";
import { Account } from "./pages/account";
import "./styles/global.scss";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="signin" element={<SignIn />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="reset" element={<Reset />} />
                        <Route path="forgot" element={<Forgot />} />
                        <Route path="account" element={<Account />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
