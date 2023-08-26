import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { BlogContextProvider } from "./context/blogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BlogContextProvider>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </BlogContextProvider>
);
