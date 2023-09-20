import "./product.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";

const photos = [
    "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=823",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n2.jpg?v=1637107143&width=823",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n3.jpg?v=1637107143&width=823",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n4.jpg?v=1637107143&width=823",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n5.jpg?v=1637107143&width=823",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n6.jpg?v=1637107143&width=823",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n8.jpg?v=1637107143&width=823",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n10.jpg?v=1637107143&width=823",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n12.jpg?v=1637107143&width=823",
];

const Product = () => {
    return (
        <div className="product">
            <Sidebar />
            <div className="productContainer">
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
                                    <span className="itemKey">
                                        Description:
                                    </span>
                                    <span className="itemValue">
                                        Our architectural, origami inspired
                                        shoulder bag, now has a new dimension.
                                        It can be converted into a wrist bag
                                        just with a quick move. The shoulder
                                        strap can easily be removed, so you can
                                        slung it from your wrist or use as a
                                        clutch. It has plenty of room inside for
                                        your essentials including a large phone,
                                        small wallet, and 300 ml water bottle.
                                        Made from smooth leather and has a suede
                                        top with two-way zip fastening. Interior
                                        features two slip pockets.
                                    </span>
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
                            aspect={3 / 2}
                            title="Product sold ( Last 6 Months)"
                            product={true}
                        />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Photos</h1>
                    <div className="photos">
                        {photos.map((value, index) => (
                            <div key={index} className="photoItem">
                                <img
                                    src={value}
                                    alt={`${"Small Convertible Flex Bag"} ${"Capuchino"} ${index}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
