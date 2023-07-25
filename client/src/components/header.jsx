import ArrowDown from "../imgs/down-arrow.png";
import Search from "../imgs/search.png";
import User from "../imgs/user.png";
import Bag from "../imgs/bag.png";
import Close from "../imgs/close.png";
import "../styles/header.scss";
import { useState } from "react";

export const Header = () => {
    const [searching, setSearching] = useState(false);

    return (
        <div className="header container">
            <div className="header-wrapper wrapper">
                <img
                    className="logo"
                    src="https://theme-dawn-demo.myshopify.com/cdn/shop/files/Dawn_logo.png?v=1637111732&width=600%22%20alt=%22Dawn%22%20srcset=%22//theme-dawn-demo.myshopify.com/cdn/shop/files/Dawn_logo.png"
                    alt="logo"
                />
                <div className="navigate-wrapper">
                    <div className="bags-wrapper">
                        <span>Bags</span>
                        <img src={ArrowDown} alt="arrow" />
                    </div>
                    <div className="shoes-wrapper">
                        <span>Shoes</span>
                        <img src={ArrowDown} alt="arrow" />
                    </div>
                    <div className="Lookbook-wrapper">
                        <span>Lookbook</span>
                    </div>
                </div>
                <div className="icons-wrapper">
                    <img
                        src={Search}
                        alt="search"
                        onClick={() => setSearching(true)}
                    />
                    <img src={User} alt="user" />
                    <img src={Bag} alt="blog" />
                </div>
            </div>
            <div
                className="search-wrapper wrapper"
                id={searching ? "searching" : ""}
            >
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <img src={Search} alt="search" />
                </div>
                <img
                    className="close"
                    alt="close"
                    src={Close}
                    onClick={() => setSearching(false)}
                />
            </div>
        </div>
    );
};
