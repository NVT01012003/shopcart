import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { useCallback, useEffect, useState } from "react";

export const Layout = () => {
    const [header, setHeader] = useState(null);
    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y > window.scrollY && window.scrollY > 84 && header != "show")
                setHeader("show");
            else if (
                y < window.scrollY &&
                window.scrollY > 84 &&
                header == "show"
            )
                setHeader("hidden");
            else if (window.scrollY == 0) setHeader(null);
            setY(window.scrollY);
        },
        [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    return (
        <div className="layout">
            <Header show={header} />
            <Outlet />
            <Footer />
        </div>
    );
};
