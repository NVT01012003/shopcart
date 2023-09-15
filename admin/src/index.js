import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/authContext";
import { StoreContextProvider } from "./context/storeContext";

ReactDOM.render(
    <React.StrictMode>
        <DarkModeContextProvider>
            <AuthContextProvider>
                <StoreContextProvider>
                    <App />
                </StoreContextProvider>
            </AuthContextProvider>
        </DarkModeContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
