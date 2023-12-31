import User from "../imgs/user.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { SignIn } from "../components/signin";
import "../styles/account.scss";

const user = {
    id: "013",
    user_name: "Trang Nguyen",
    country: "Viet Nam",
    address: null,
};

const purchase = null;

export const Account = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser.user) return <SignIn />;
    return (
        <div className="account-container container">
            <div className="account wrapper">
                <div className="title">
                    <h2>Account</h2>
                    <div>
                        <img src={User} alt="user" />
                        <span> Log out</span>
                    </div>
                </div>
                <div className="content">
                    <div className="item order-history">
                        <h2>
                            Recently<span>{`( view products )`}</span>
                        </h2>
                        <h2>Order history</h2>
                        {!purchase && (
                            <span>You haven't placed any orders yet.</span>
                        )}
                    </div>
                    <div className="item account-details">
                        <h2>Account details</h2>
                        <span className="user_name">{user.user_name}</span>
                        <span className="country">{user.country}</span>
                        <span className="address">
                            <Link to="/account/address">
                                View address ({currentUser.address?.length || 0}
                                )
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
