import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/address.scss";

const user = {
    id: "013",
    user_name: "Trang Nguyen",
    country: "Viet Nam",
    address: null,
};

export const Address = () => {
    const [newAddress, setNewAddress] = useState(false);

    return (
        <div className="address-container container">
            <div className="address wrapper">
                <h2>Address</h2>
                <span className="redirect-account">
                    <Link to="/account">Return to Account details</Link>
                </span>
                <div className="btn-wrapper">
                    <button onClick={() => setNewAddress(true)}>
                        Add a new address
                    </button>
                </div>
                <div
                    className="add-new-container"
                    id={newAddress ? "show" : ""}
                >
                    <span>Add a new address</span>
                    <div className="address-form">
                        <input
                            className="address-input input-border"
                            type="text"
                            placeholder="Address"
                        />
                        <input
                            className="phone_number input-border"
                            type="text"
                            placeholder="Phonne number"
                        />
                        <div>
                            <input
                                className="setDefault"
                                name="setDefault"
                                id="setDefault"
                                type="checkbox"
                            />
                            <label htmlFor="setDefault">Set as default</label>
                        </div>
                    </div>
                    <div className="btn-container">
                        <div className="btn-wrapper">
                            <button>Add address</button>
                        </div>
                        <div className="outline-btn-wrapper">
                            <button onClick={() => setNewAddress(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                <div className="default-wrapper">
                    <span className="title">Default</span>
                    <span className="content">{user.user_name}</span>
                    <span className="content">{user.country}</span>
                    <div>
                        <div className="outline-btn-wrapper">
                            <button>Edit</button>
                        </div>
                        <div className="outline-btn-wrapper">
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
