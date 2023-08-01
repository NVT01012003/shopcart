import ArrowDown from "../imgs/down-arrow.png";
import Search from "../imgs/search.png";
import User from "../imgs/user.png";
import Bag from "../imgs/bag.png";
import Close from "../imgs/close.png";
import "../styles/header.scss";
import { useRef, useState } from "react";

const bags = {
    "Shop all": "/",
    "Tote bags": "/",
    "Shoulder bags": "/",
    "Top handle bags": "/",
    "Crossbody bags": "/",
    "Mini bags": "/",
};

const shoes = {
    "Shop all": "/",
    Sandals: "/",
    Boots: "/",
};

export const Header = ({ show }) => {
    const [searching, setSearching] = useState(false);
    const [bagCategories, setBagCategories] = useState(false);
    const [shoeCategories, setShoeCategories] = useState(false);
    const ref = useRef();

    return (
        <div
            className="header container"
            id={show == "show" ? "show" : show == "hidden" ? "hidden" : ""}
        >
            <div className="header-wrapper wrapper">
                <img
                    className="logo"
                    src="https://theme-dawn-demo.myshopify.com/cdn/shop/files/Dawn_logo.png?v=1637111732&width=600%22%20alt=%22Dawn%22%20srcset=%22//theme-dawn-demo.myshopify.com/cdn/shop/files/Dawn_logo.png"
                    alt="logo"
                />
                <div className="navigate-wrapper">
                    <div
                        className="bags-wrapper"
                        onClick={() => setBagCategories((pre) => !pre)}
                    >
                        <span>Bags</span>
                        <img src={ArrowDown} alt="arrow" />
                        <div
                            className="bags-categories"
                            id={bagCategories ? "show" : ""}
                        >
                            {Object.keys(bags).map((value, index) => {
                                return (
                                    <a key={index} href={bags[value]}>
                                        {value}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className="shoes-wrapper"
                        onClick={() => setShoeCategories((pre) => !pre)}
                    >
                        <span>Shoes</span>
                        <img src={ArrowDown} alt="arrow" />
                        <div
                            className="shoes-categories"
                            id={shoeCategories ? "show" : ""}
                        >
                            {Object.keys(shoes).map((value, index) => {
                                return (
                                    <a key={index} href={bags[value]}>
                                        {value}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="Lookbook-wrapper">
                        <span>Lookbook</span>
                    </div>
                </div>
                <div className="icons-wrapper">
                    <img
                        src={Search}
                        alt="search"
                        onClick={() => {
                            setSearching(true);
                            ref.current.focus();
                        }}
                    />
                    <img src={User} alt="user" />
                    <img src={Bag} alt="blog" />
                </div>
            </div>
            <div
                className="search-wrapper wrapper"
                id={searching ? "searching" : ""}
            >
                <div className="search div-input-border">
                    <input type="text" placeholder="Search" ref={ref} />
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
