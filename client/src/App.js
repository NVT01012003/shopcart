import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import "./styles/global.scss";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
