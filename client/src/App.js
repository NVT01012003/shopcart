import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { Reset } from "./pages/reset";
import { Forgot } from "./pages/forgot";
import { Account } from "./pages/account";
import { Address } from "./pages/address";
import "./styles/global.scss";
import { NotFound } from "./pages/notFound";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="account">
                            <Route index element={<Account />} />
                            <Route path="address" element={<Address />} />
                            <Route path="signin" element={<SignIn />} />
                            <Route path="signup" element={<SignUp />} />
                            <Route path="reset" element={<Reset />} />
                            <Route path="forgot" element={<Forgot />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
