import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { Reset } from "./pages/reset";
import { Forgot } from "./pages/forgot";
import { Account } from "./pages/account";
import { Address } from "./pages/address";
import { Products } from "./pages/products";
import { LookBook } from "./pages/lookbook";
import { NotFound } from "./pages/notFound";
import { Cart } from "./pages/cart";
import { AboutUs } from "./pages/about";
import { ContactUs } from "./pages/contact";
import "./styles/global.scss";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="lookbook" element={<LookBook />} />
                        <Route path="account">
                            <Route index element={<Account />} />
                            <Route path="address" element={<Address />} />
                            <Route path="signin" element={<SignIn />} />
                            <Route path="signup" element={<SignUp />} />
                            <Route path="reset" element={<Reset />} />
                            <Route path="forgot" element={<Forgot />} />
                        </Route>
                        <Route path="categories">
                            <Route
                                path=":products/:pageNumber"
                                element={<Products />}
                            />
                        </Route>
                        <Route path="search">
                            <Route
                                path=":search/:pageNumber"
                                element={<Products />}
                            />
                        </Route>
                        <Route path="info">
                            <Route path="about us" element={<AboutUs />} />
                            <Route path="contact us" element={<ContactUs />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
