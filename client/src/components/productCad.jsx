import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const vndFormatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
});
const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export const Card = ({ item }) => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="card-container">
            <div className="img-wrapper">
                <img src={item.photos[0]} />
                {item.discount > 0 && <span>Sale</span>}
            </div>
            <div>
                <span>{item.name}</span>
                <div className="prices-wrapper">
                    {item.discount > 0 && (
                        <span className="cost">
                            ₫{item.price}{" "}
                            {(currentUser.country == "Viet Nam" && "VND") ||
                                "USD"}
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
