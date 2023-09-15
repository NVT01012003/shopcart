import "./product.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Product = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <div className="details">
                                <h1 className="itemTitle">
                                    Small Convertible Flex Bag
                                </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Price:</span>
                                    <span className="itemValue">3200000</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">In stock:</span>
                                    <span className="itemValue">12</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Height:</span>
                                    <span className="itemValue">21cm</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Width:</span>
                                    <span className="itemValue">28cm</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Color:</span>
                                    <span className="itemValue">Capuchino</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Brand:</span>
                                    <span className="itemValue">Mlouye</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Materials:</span>
                                    <span className="itemValue">
                                        Crafted from smooth calf leather. Canvas
                                        lining. Brushed gold hardware. Two
                                        interior pockets. Detachable and
                                        adjustable shoulder strap.
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">
                                        Instructions:
                                    </span>
                                    <span className="itemValue">
                                        Use a soft damp cloth and a drop of mild
                                        soap to remove any haze. Air dry.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart
                            aspect={2 / 1}
                            title="Product sold ( Last 6 Months)"
                        />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Product;
