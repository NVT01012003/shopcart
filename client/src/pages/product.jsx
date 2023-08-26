import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { vndFormatter, usdFormatter } from "../common/currencyFormater";
import Heart from "../imgs/heart.png";
import Ruler from "../imgs/ruler.png";
import Materials from "../imgs/materials.png";
import ArrowDown from "../imgs/down-arrow.png";
import Upload from "../imgs/upload.png";
import { Card } from "../components/productCad";
import "../styles/product.scss";

const stand = {
    name: "Small Convertible Flex Bag",
    desc: "Our architectural, origami inspired shoulder bag, now has a new dimension. It can be converted into a wrist bag just with a quick move. The shoulder strap can easily be removed, so you can slung it from your wrist or use as a clutch. It has plenty of room inside for your essentials including a large phone, small wallet, and 300 ml water bottle. Made from smooth leather and has a suede top with two-way zip fastening. Interior features two slip pockets. ",
    products: {
        1: {
            photos: [
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n2.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n3.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n4.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n5.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n6.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n8.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n10.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n12.jpg?v=1637107143&width=1100",
            ],
            price: 395000,
            sale: true,
            discount: 75000,
            specifications: {
                color: "Cappuchino",
                materials:
                    "Crafted from smooth calf leather. Canvas lining. Brushed gold hardware. Two interior pockets. Detachable and adjustable shoulder strap.",
                width: 0.21,
                height: 0.28,
                instructions:
                    "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
            },
        },
        2: {
            photos: [
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-clay-1_1.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-clay-2_1.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-clay-3_6fb17082-d2ed-46f9-a530-5714b96ebe56.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-clay-4_590e232c-1974-4d7c-871e-705d0298bed2.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-clay-12_ae6c226f-224d-4c91-b2ba-91c9cb43eb04.jpg?v=1637107143&width=1100",
            ],
            price: 395000,
            sale: false,
            discount: null,
            specifications: {
                color: "Clay",
                materials:
                    "Crafted from smooth calf leather. Canvas lining. Brushed gold hardware. Two interior pockets. Detachable and adjustable shoulder strap.",
                width: 0.21,
                height: 0.28,
                instructions:
                    "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
            },
        },
        3: {
            photos: [
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-denim-1_0bc8bc96-e96c-4475-8bd7-57732cc73716.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-denim-2_837bc7f6-0a13-4b23-bff6-34a6dd3f1e38.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-denim-3_79d0d821-844e-4a87-aa2f-da39d6d8ff84.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-denim-4_3d3d4a96-eabf-45f4-a995-6c3a1af8b051.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-denim-11_1.jpg?v=1637107143&width=1100",
            ],
            price: 395000,
            sale: false,
            discount: null,
            specifications: {
                color: "Denim",
                materials:
                    "Crafted from smooth calf leather. Canvas lining. Brushed gold hardware. Two interior pockets. Detachable and adjustable shoulder strap.",
                width: 0.21,
                height: 0.28,
                instructions:
                    "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
            },
        },
        4: {
            photos: [
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-harvest-1_79a01701-4d23-405e-9672-05535d42af4c.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-harvest-3_96dd2fc1-5c07-4080-b2ff-759a5b2421dc.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-harvest-4_626adc70-e218-475b-af2b-ca2bf97ac926.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-harvest-6_f72f7f55-8e85-4312-96b4-dca59bb12dfc.jpg?v=1637107143&width=1100",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-harvest-12_6295c6ff-bb1d-4b31-a423-0959d5ab307d.jpg?v=1637107143&width=1100",
            ],
            price: 395000,
            sale: false,
            discount: null,
            specifications: {
                color: "Harvest",
                materials:
                    "Crafted from smooth calf leather. Canvas lining. Brushed gold hardware. Two interior pockets. Detachable and adjustable shoulder strap.",
                width: 0.21,
                height: 0.28,
                instructions:
                    "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
            },
        },
    },
};

const suggest = [
    {
        id: "1",
        name: "Small Convertible Flex Bag",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=1100",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n2.jpg?v=1637107143&width=1100",
        ],
        products: ["1", "2"],
        price: 395000,
        discount: 75000,
        min_price: true,
    },
    {
        id: "1",
        name: "Louise Slide Sandal",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb.jpg?v=1637106712&width=823",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-5_04f1f6dd-4f7c-498b-bce7-2932fa651c00.jpg?v=1637106712&width=823",
        ],
        products: ["1", "2"],
        price: 430000,
        discount: 45000,
        min_price: true,
    },
    {
        id: "1",
        name: "Small Convertible Flex Bag",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=1100",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n2.jpg?v=1637107143&width=1100",
        ],
        products: ["1", "2"],
        price: 395000,
        discount: null,
    },
    {
        id: "1",
        name: "Louise Slide Sandal",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb.jpg?v=1637106712&width=823",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-5_04f1f6dd-4f7c-498b-bce7-2932fa651c00.jpg?v=1637106712&width=823",
        ],
        products: ["1", "2"],
        price: 430000,
        discount: 45000,
        min_price: true,
    },
];

const new_product = {
    title: "A new kind of bag.",
    content:
        "Unexpected shapes with smart details, functionality, a new luxury feel with a contemporary price point.",
    photo: "https://theme-dawn-demo.myshopify.com/cdn/shop/files/imgwithtext_1070x_91914dd5-dcb3-4f6b-a829-e6e75fb5813e.png?v=1642553858&width=750",
};

export const Product = () => {
    const [product, setProduct] = useState(Object.values(stand.products)[0]);
    const [quantity, setQuantity] = useState(1);

    const [show, setShow] = useState({});
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="product-page-container container">
            <div className="wrapper">
                <div className="product-page">
                    <div className="photos-details">
                        <div className="product-photos">
                            <img src={product.photos[0]} alt="product-photo" />
                            <div className="photos-wrapper">
                                {product.photos.slice(1).map((value, index) => (
                                    <img
                                        src={value}
                                        key={index}
                                        alt={`product-photo-${index}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="product-details">
                            <h2 className="product-name">{stand.name}</h2>
                            <span className="price-wrapper">
                                {product.discount && (
                                    <span className="cost">
                                        {(currentUser.country == "Viet Nam" &&
                                            vndFormatter.format(
                                                product.price
                                            )) ||
                                            usdFormatter.format(product.price)}
                                    </span>
                                )}
                                <span className="price">
                                    {(currentUser.country == "Viet Nam" &&
                                        vndFormatter.format(
                                            product.price - product.discount
                                        )) ||
                                        usdFormatter.format(
                                            product.price - product.discount
                                        )}
                                </span>
                                {product.sale && (
                                    <span className="sale">Sale</span>
                                )}
                            </span>
                            <div className="colors-wrapper">
                                <span className="title">Color</span>
                                <div className="colors">
                                    {Object.values(stand.products).map(
                                        (value, index) => (
                                            <span
                                                className="color"
                                                id={
                                                    product.specifications
                                                        .color ==
                                                    value.specifications.color
                                                        ? "current"
                                                        : ""
                                                }
                                                key={index}
                                                onClick={() =>
                                                    setProduct(
                                                        Object.values(
                                                            stand.products
                                                        )[index]
                                                    )
                                                }
                                            >
                                                {value.specifications.color}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="quantity-wrapper">
                                <span className="title">Quantity</span>
                                <div className="quantity">
                                    <span
                                        className={
                                            quantity == 1 ? "disable" : ""
                                        }
                                        onClick={() => {
                                            if (quantity == 1) return;
                                            setQuantity((pre) => pre - 1);
                                        }}
                                    >
                                        -
                                    </span>
                                    <span>{quantity}</span>
                                    <span
                                        onClick={() =>
                                            setQuantity((pre) => pre + 1)
                                        }
                                    >
                                        +
                                    </span>
                                </div>
                            </div>
                            <div className="add-btn-wrapper">
                                <button>Add to cart</button>
                            </div>
                            <div className="btn-wrapper">
                                <button>Buy it now</button>
                            </div>
                            {stand.desc && <p className="desc">{stand.desc}</p>}
                            <div className="detail-wrapper">
                                <div
                                    className="detail-btn"
                                    onClick={() => {
                                        if (!show.materials)
                                            setShow((pre) => ({
                                                ...pre,
                                                materials: true,
                                            }));
                                        else
                                            setShow((pre) => ({
                                                ...pre,
                                                materials: false,
                                            }));
                                    }}
                                >
                                    <div>
                                        <img
                                            src={Materials}
                                            alt="material-icon"
                                        />
                                        <span>Materials</span>
                                    </div>
                                    <img src={ArrowDown} alt="arrow-down" />
                                </div>
                                <span
                                    className="detail"
                                    id={show.materials ? "show" : ""}
                                >
                                    {product.specifications.materials}
                                </span>
                            </div>
                            <div className="detail-wrapper">
                                <div
                                    className="detail-btn"
                                    onClick={() => {
                                        if (!show.dimensions)
                                            setShow((pre) => ({
                                                ...pre,
                                                dimensions: true,
                                            }));
                                        else
                                            setShow((pre) => ({
                                                ...pre,
                                                dimensions: false,
                                            }));
                                    }}
                                >
                                    <div>
                                        <img src={Ruler} alt="ruler-icon" />
                                        <span>Dimensions</span>
                                    </div>
                                    <img src={ArrowDown} alt="arrow-down" />
                                </div>
                                <span
                                    className="detail"
                                    id={show.dimensions ? "show" : ""}
                                >
                                    {`h:${(
                                        product.specifications.height * 100
                                    ).toFixed(2)} X w:${(
                                        product.specifications.width * 100
                                    ).toFixed(2)} cm`}
                                </span>
                            </div>
                            <div className="detail-wrapper" id="last-detail">
                                <div
                                    className="detail-btn"
                                    onClick={() => {
                                        if (!show.instructions)
                                            setShow((pre) => ({
                                                ...pre,
                                                instructions: true,
                                            }));
                                        else
                                            setShow((pre) => ({
                                                ...pre,
                                                instructions: false,
                                            }));
                                    }}
                                >
                                    <div>
                                        <img src={Heart} alt="heart-icon" />
                                        <span>Care Instructions</span>
                                    </div>
                                    <img src={ArrowDown} alt="arrow-down" />
                                </div>
                                <span
                                    className="detail"
                                    id={show.instructions ? "show" : ""}
                                >
                                    {product.specifications.instructions}
                                </span>
                            </div>
                            <div className="share">
                                <img src={Upload} alt="upload-icon" />
                                Share
                            </div>
                        </div>
                    </div>
                    <div className="new-product">
                        <div className="new">
                            <h2>{new_product.title}</h2>
                            <span>{new_product.content}</span>
                        </div>
                        <img src={new_product.photo} alt="new-product-img" />
                    </div>
                    <div className="return">
                        <h4>Hassle-Free Exchanges</h4>
                        <span>
                            Exchanges are free. Try from the comfort of your
                            home. We will collect from your home, work or an
                            alternative address.
                        </span>
                    </div>
                    <div className="suggest-wrapper">
                        <h3 className="title">You may also like</h3>
                        <div id="products">
                            {suggest.map((value, index) => (
                                <Card item={value} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
