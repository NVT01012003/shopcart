import { Card } from "../components/productCad";
import "../styles/lookbook.scss";

const inspiration = {
    title: "Summer inspiration",
    banner: [
        {
            photos: [
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/beige_1100x_d4e0c67c-45cd-4f0f-903f-74d6dd8467fd.jpg?v=1642000987&width=1000",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/mlouye-helix-sand-banner-mobile-l1_720x_3ecd24b4-b415-4297-a717-dbc969b84f50.jpg?v=1642000987&width=500",
            ],
        },
        {
            photos: [
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/67708907_901020666948593_6980208638084257089_n_990x_b7a9dd6a-6429-4c75-a26a-5c7a43504f5c.jpg?v=1642000987&width=500",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/mlouye-helix-sand-banner-mobile-l1_720x_3ecd24b4-b415-4297-a717-dbc969b84f50.jpg?v=1642000987&width=500",
            ],
        },
        {
            photos: [
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/fence_990x_0b9bb165-c606-4ade-916d-11d2ad41ab46.jpg?v=1642000987&width=1000",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/17265992_273568689752120_565474247435091968_n_990x_2d589feb-4427-4ba3-84ed-8091a3501cd1.jpg?v=1642000987&width=500",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/15803153_1119335364831494_1136873067247566848_n_990x_8a61e648-8aa6-464e-9347-e6a30633405d.jpg?v=1642000987&width=990",
            ],
        },
        {
            photos: [
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/23667958_1995292917378769_1214838960031793152_n_720x_50555b44-b16a-485f-a92f-b9beb0dd9971.jpg?v=1642000988&width=1000",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/sera-tote-new-de-ban2_1100x_6a3da929-e585-4607-b4a3-4af6e3e1a68b.jpg?v=1642001275&width=1000",
            ],
        },
        {
            photos: [
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/pink-cropped_1500x_262de62e-3c12-4e92-a5b6-8035d622e2b2.jpg?v=1642000987&width=1000",
                "https://theme-dawn-demo.myshopify.com/cdn/shop/files/59621535_133816347799668_5448715094877713107_n_990x_32ac2a95-335f-44ef-bc38-70003a892ad6.jpg?v=1642000987&width=1000",
            ],
        },
    ],
};

const featured = [
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
        discount: 0,
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
        discount: 0,
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
        discount: 75000,
    },
];

export const LookBook = () => {
    return (
        <div className="lookbook-container container">
            <div className="wrapper">
                <div className="lookbook">
                    <div className="inspiration">
                        <h2 className="title">{inspiration.title}</h2>
                        {inspiration.banner.map((value, index) => {
                            if (index == 0 || index == 4) {
                                return (
                                    <div
                                        className="grid-2-item"
                                        id="item"
                                        key={index}
                                    >
                                        <div className="grid-item-1-areas">
                                            <img
                                                src={value.photos[0]}
                                                alt={`photo-${index}-0`}
                                            />
                                        </div>
                                        <div className="grid-item-2-areas">
                                            <img
                                                src={value.photos[1]}
                                                alt={`photo-${index}-1`}
                                            />
                                        </div>
                                    </div>
                                );
                            } else if (index == 1 || index == 3) {
                                return (
                                    <div
                                        className="grid-2-item grid-column-reverse"
                                        id="item"
                                        key={index}
                                    >
                                        <div className="grid-item-1-areas">
                                            <img
                                                src={value.photos[0]}
                                                alt={`photo-${index}-0`}
                                            />
                                        </div>
                                        <div className="grid-item-2-areas">
                                            <img
                                                src={value.photos[1]}
                                                alt={`photo-${index}-1`}
                                            />
                                        </div>
                                    </div>
                                );
                            } else
                                return (
                                    <div
                                        className="grid-3-item"
                                        id="item"
                                        key={index}
                                    >
                                        <div className="grid-item-1-areas">
                                            <img
                                                src={value.photos[0]}
                                                alt={`photo-${index}-0`}
                                            />
                                        </div>
                                        <div className="grid-item-2-areas">
                                            <img
                                                src={value.photos[1]}
                                                alt={`photo-${index}-1`}
                                            />
                                        </div>
                                        <div className="grid-item-3-areas">
                                            <img
                                                src={value.photos[2]}
                                                alt={`photo-${index}-2`}
                                            />
                                        </div>
                                    </div>
                                );
                        })}
                    </div>
                    <div className="featured">
                        <h2 className="title">Featured</h2>
                        <div id="products">
                            {featured.map((value, index) => (
                                <Card item={value} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
