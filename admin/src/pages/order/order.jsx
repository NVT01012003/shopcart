import "./order.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Order = () => {
    const status = "pending";
    return (
        <div className="order">
            <Sidebar />
            <div className="orderContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Order details</h1>
                        <div className="item">
                            <div className="details">
                                <h1>ID: 1241234124</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Product:</span>
                                    <span className="itemValue">
                                        Mechanical keyboard kit FL - MK750
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Customer:</span>
                                    <span className="itemValue">
                                        Erling Haaland
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Date:</span>
                                    <span className="itemValue">
                                        JANUARY 18, 2022
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">
                                        Payment method:
                                    </span>
                                    <span className="itemValue">
                                        Cash on Delivery
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Quantity:</span>
                                    <span className="itemValue">2</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Total:</span>
                                    <span className="itemValue">2400000</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">
                                        Ngách 35 Ngõ 66 Đường Hồ Tùng Mậu,
                                        Phường Mai Dịch, Quận Cầu Giấy, Hà Nội
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Status:</span>
                                    <span className="itemValue">Pending</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {status == "pending" && (
                                <button className={`action pending`}>
                                    Confirm
                                </button>
                            )}
                            <button className="action cancel">Cancel</button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Order Products</h1>
                        <div className="item">
                            <div className="details">
                                <h1>ID: 1241234124</h1>
                                <div className="productItem">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/438/322/products/kit-fl-fl750-obsidiant.jpg?v=1673012958973"
                                        alt={`product-${"fl-mk750"}`}
                                    />
                                    <div className="product-detail">
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Product:
                                            </span>
                                            <span className="itemValue">
                                                Mechanical keyboard kit FL -
                                                MK750
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Price:
                                            </span>
                                            <span className="itemValue">
                                                1200000
                                            </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">
                                                Color:
                                            </span>
                                            <span className="itemValue">
                                                Black transparent
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <span className="itemKey">
                                            Quantity:
                                        </span>
                                        <span className="itemValue">2</span>
                                    </div>
                                    <div className="product-detail">
                                        <span className="itemKey">Total:</span>
                                        <span className="itemValue">
                                            2400000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
