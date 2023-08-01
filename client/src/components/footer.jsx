import Facebook from "../imgs/facebook.png";
import Instagram from "../imgs/instagram.png";
import Youtube from "../imgs/youtube.png";
import Tiktok from "../imgs/tik-tok.png";
import Twitter from "../imgs/twitter.png";
import Next from "../imgs/next.png";
import Visa from "../imgs/visa.png";
import Card from "../imgs/card.png";
import Paypal from "../imgs/paypal.png";
import ArrowDown from "../imgs/down-arrow.png";
import "../styles/footer.scss";
import { useState } from "react";

const country_region = [
    { "Viet Nam": "VND ₫" },
    { Canada: "CAD $" },
    { France: "EUR €" },
    { Germany: "EUR €" },
    { "United Kingdom": "GBP £" },
    { "United State": "USD $" },
];

export const Footer = () => {
    const [country, setCountry] = useState({
        country: Object.keys(country_region[0]),
        index: 0,
    });
    const [selector, setSelector] = useState(false);
    return (
        <div className="footer">
            <div className="footer_content-top container">
                <div className="wrapper">
                    <div className="footer_content-wrapper row-3">
                        <div className="item col-3">
                            <h2>Quick links</h2>
                            <span>Bags</span>
                            <span>Shoes</span>
                            <span>Lookbook</span>
                        </div>
                        <div className="item col-3">
                            <h2>Info</h2>
                            <span>About</span>
                            <span>Contact us</span>
                            <span>Shipping policy</span>
                            <span>Blog</span>
                        </div>
                        <div className="item col-3">
                            <h2>Our mission</h2>
                            <span>
                                Quality materials, good designs, craftmanship
                                and sustainability
                            </span>
                        </div>
                    </div>
                    <div className="footer_content-wrapper">
                        <div className="subscribe-wrapper">
                            <h2>Subscribe to our emails</h2>
                            <div className="iput-wrapper div-input-border">
                                <input type="text" placeholder="Email" />
                                <img src={Next} alt="next" />
                            </div>
                        </div>
                        <div className="social-btn">
                            <img src={Facebook} alt="facebook" />
                            <img src={Instagram} alt="instagram" />
                            <img src={Youtube} alt="youtube" />
                            <img src={Tiktok} alt="tiktok" />
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_content-bottom container">
                <div className="wrapper">
                    <div className="item">
                        <div className="country-region-wrapper">
                            <span className="title">Country/region</span>
                            <div
                                className={
                                    !selector
                                        ? "current-country-wrapper"
                                        : "current-country-wrapper selector"
                                }
                                onClick={() => setSelector((pre) => !pre)}
                            >
                                <span>{`${
                                    country_region[country.index][
                                        country.country
                                    ]
                                } | ${country.country}`}</span>
                                <img src={ArrowDown} />
                            </div>
                            <div
                                className={
                                    !selector
                                        ? "country-region"
                                        : "country-region selector"
                                }
                            >
                                {country_region.map((value, index) => {
                                    return (
                                        <span
                                            value={Object.values(value)[0]}
                                            key={index}
                                            className={
                                                Object.keys(value)[0] ==
                                                country.country
                                                    ? "current"
                                                    : ""
                                            }
                                            onClick={() =>
                                                setCountry({
                                                    country: Object.keys(
                                                        country_region[index]
                                                    )[0],
                                                    index,
                                                })
                                            }
                                        >{`${Object.values(value)[0]} | ${
                                            Object.keys(value)[0]
                                        }`}</span>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="payment-wrapper">
                            <div>
                                <img src={Visa} alt="visa" className="visa" />
                            </div>
                            <div>
                                <img src={Card} alt="mastercard" />
                            </div>
                            <div>
                                <img src={Paypal} alt="paypal" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <span>
                            <span>@ 2023, </span>
                            <span className="dawn-shop">D A W N Shop. </span>
                            <span className="reserved">
                                All right reserved.
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
