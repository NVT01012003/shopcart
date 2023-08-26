import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { vndFormatter, usdFormatter } from "../common/currencyFormater";
import "../styles/card.scss";

export const Card = ({ item, added_class }) => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className={`card-container ${added_class}`}>
            <div className="img-wrapper">
                <img className="img-1" src={item.photos[0]} />
                {item.photos[1] && (
                    <img className="img-2" src={item.photos[1]} />
                )}
                {item.discount > 0 && <span>Sale</span>}
            </div>
            <div className="desc-container">
                <span>{item.name}</span>
                <div className="price-wrapper">
                    {item.discount > 0 && (
                        <span className="cost">
                            {(currentUser.country == "Viet Nam" &&
                                vndFormatter.format(item.price)) ||
                                usdFormatter.format(item.price)}
                        </span>
                    )}
                    {item.min_price && <span>From</span>}
                    <span className="price">
                        {(currentUser.country == "Viet Nam" &&
                            vndFormatter.format(item.price - item.discount)) ||
                            usdFormatter.format(
                                (item.price - item.discount) / 23000
                            )}
                    </span>
                </div>
            </div>
        </div>
    );
};
