import { Card } from "../components/productCad";
import Next from "../imgs/next.png";
import Play from "../imgs/play-button.png";
import Logo1 from "../imgs/Mlouye_Refinery_logo.png";
import Logo2 from "../imgs/the-cut-logo2.png";
import "../styles/home.scss";
const banners = [
    "//theme-dawn-demo.myshopify.com/cdn/shop/files/141569803_417219312901458_4638470652865432174_n.jpg?v=1637107084&width=3840",
    "//theme-dawn-demo.myshopify.com/cdn/shop/files/Mlouye.jpg?v=1637107315&width=3840",
];
const stands = {
    1: {
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
    2: {
        id: "2",
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
    3: {
        id: "3",
        name: "Small Convertible Flex Bag",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=1100",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n2.jpg?v=1637107143&width=1100",
        ],
        products: ["1", "2"],
        price: 395000,
        discount: null,
    },
    4: {
        id: "4",
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
    5: {
        id: "5",
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
    6: {
        id: "6",
        name: "Louise Slide Sandal",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb.jpg?v=1637106712&width=823",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-louise-slide-sandal-buttermilk-5_04f1f6dd-4f7c-498b-bce7-2932fa651c00.jpg?v=1637106712&width=823",
        ],
        products: ["1", "2"],
        price: 430000,
        discount: null,
        min_price: true,
    },
    7: {
        id: "7",
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
    8: {
        id: "8",
        name: "Small Convertible Flex Bag",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=1100",
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n2.jpg?v=1637107143&width=1100",
        ],
        products: ["1", "2"],
        price: 395000,
        discount: 75000,
    },
};
const backIStock = {
    bags: {
        image: "https://theme-dawn-demo.myshopify.com/cdn/shop/collections/Mlouye_-_Bags_collection.jpg?v=1637109194&width=750",
    },
    shoes: {
        image: "https://theme-dawn-demo.myshopify.com/cdn/shop/collections/Mlouye_-_Shoe_collection.jpg?v=1637109743&width=750",
    },
    product: {
        id: "1",
        name: "Mini Eddy",
        photos: [
            "https://theme-dawn-demo.myshopify.com/cdn/shop/products/mlouye-small-convertible-flex-bag-cappuccino-n1.jpg?v=1637107143&width=1100",
        ],
        products: ["1", "2"],
        price: 395000,
        discount: 75000,
        min_price: true,
    },
};
const video = {
    image: "https://theme-dawn-demo.myshopify.com/cdn/shop/files/Mlouye_video.png?v=1637108281&width=1500",
};

export const Home = () => {
    return (
        <div className="home container">
            <div className="banner-background">
                <div className="banner-content-overlay"></div>
                <img src={banners[0]} alt="bags" />
                <img src={banners[1]} alt="shoes" />
            </div>
            <div className="banner-content wrapper">
                <div className="banner-content-wrapper">
                    <span className="title">
                        Industrial desgin meets fashion.
                    </span>
                    <span>Atypical leather goods</span>
                    <div>
                        <button className="shop-btn">
                            <a href="/categories/products/1">Shop now</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="home-content container">
                <div className="heading">
                    <h1>Obsessive Attention. Intelligent Effort.</h1>
                    <span>
                        Functional handbags made of luxurious materials to
                        improve people's lives in small but mighty ways.
                    </span>
                </div>
                <div className="products-container container">
                    <div className="products-wrapper wrapper">
                        <div id="products">
                            {Object.values(stands).map((value, index) => (
                                <Card item={value} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="backIStock-container container">
                    <div className="backIStock-wrapper wrapper">
                        <h2 className="title">Back in stock!</h2>
                        <div className="backIStock grid-3-item">
                            <div className="bags grid-item-1-areas">
                                <div className="img-wrapper">
                                    <img
                                        src={backIStock.bags.image}
                                        alt="bags"
                                    />
                                </div>
                                <span>
                                    Bags
                                    <img src={Next} alt="next" id="next" />
                                </span>
                            </div>
                            <Card
                                item={backIStock.product}
                                key={backIStock.product.id}
                                added_class="grid-item-2-areas"
                            />
                            <div className="shoes grid-item-3-areas">
                                <div className="img-wrapper">
                                    <img
                                        src={backIStock.shoes.image}
                                        alt="shoes"
                                    />
                                </div>
                                <span>
                                    Shoes
                                    <img src={Next} alt="next" id="next" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="introduction-video container">
                    <div className="wrapper">
                        <div className="video-wrapper">
                            <img
                                src={video.image}
                                alt="video"
                                className="video"
                            />
                            <img src={Play} alt="play" className="play" />
                        </div>
                    </div>
                </div>
                <div className="multicolumn container">
                    <div className="wrapper">
                        <div id="multicolumn">
                            <div className="item">
                                <img src={Logo1} alt="Mlouye Refinery" />
                                <span>
                                    "The leather is sourced from environmentally
                                    friendly tanneries in Italy, France, and
                                    Turkey, where Rure is based and everything
                                    is assembled by hand."
                                </span>
                            </div>
                            <div className="item">
                                <img src={Logo2} alt="The Cut" />
                                <span>
                                    "All too often, we're forced to pick: style,
                                    or sustainability. Recently, more designers
                                    have been making environmental impact a top
                                    priority"
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
