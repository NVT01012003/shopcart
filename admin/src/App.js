import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Product from "./pages/product/Product";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/authContext";
import "./style/dark.scss";
import { ListProduct } from "./pages/listProduct/ListProduct";
import ListOrder from "./pages/listOrder/listOrder";
import Order from "./pages/order/order";
// import { NotFound } from "./pages/notFound/notFound";

function App() {
    const { darkMode } = useContext(DarkModeContext);
    // const { user } = useContext(AuthContext);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    {/* {(!user.id && (
                        <Route path="/">
                            <Route index element={<NotFound />} />
                            <Route path="login" element={<Login />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    )) || ( */}
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="users">
                            <Route index element={<List />} />
                            <Route path=":userId" element={<Single />} />
                            <Route
                                path="new"
                                element={
                                    <New
                                        inputs={userInputs}
                                        title="Add New User"
                                    />
                                }
                            />
                        </Route>
                        <Route path="products">
                            <Route index element={<ListProduct />} />
                            <Route path=":productId" element={<Product />} />
                            <Route
                                path="new"
                                element={
                                    <New
                                        inputs={productInputs}
                                        title="Add New Product"
                                    />
                                }
                            />
                        </Route>
                        <Route path="orders">
                            <Route index element={<ListOrder />} />
                            <Route path="test" element={<Order />} />
                        </Route>
                    </Route>
                    {/* )} */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
