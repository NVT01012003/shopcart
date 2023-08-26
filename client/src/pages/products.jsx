import { useState } from "react";
import { useParams } from "react-router-dom";
import ArrowDown from "../imgs/down-arrow.png";
import { Card } from "../components/productCad";
import "../styles/products.scss";

const stands = [
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
        discount: null,
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
        discount: null,
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
        discount: null,
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
        discount: null,
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
        discount: null,
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

export const Products = () => {
    const routeParams = useParams();
    const products_page = {
        searching: routeParams.search,
        title: routeParams.products,
        total: 28,
        filter: {
            max_price: 615000,
            color: {
                butter: 2,
                chocolate: 2,
                denim: 2,
                "dry rose": 3,
            },
            instock: 26,
        },
        sort: [
            "Featured",
            "Best selling",
            "Alphabetically, A-Z",
            "Alphabetically, Z-A",
            "Price, low to high",
            "Price, high to low",
            "Date, old to new",
            "Date, new to old",
        ],
    };
    const nextPage = () => {
        const path = !products_page.searching
            ? `/categories/${products_page.title}/${pageNumber + 1}`
            : `/${products_page.searching}/${pageNumber + 1}`;
        return path;
    };
    const backPage = () => {
        const path = !products_page.searching
            ? `/categories/${products_page.title}/${pageNumber - 1}`
            : `/${products_page.searching}/${pageNumber - 1}`;
        return path;
    };
    const [sortBy, setSortBy] = useState({
        sortBy: products_page.sort[0],
        index: 0,
    });
    const [selector, setSelector] = useState(false);
    const [pageNumber, setPageNumber] = useState(~~routeParams.pageNumber);
    return (
        <div className="products-container container">
            <div className="products-wrapper wrapper">
                <div className="products">
                    {!products_page.searching && (
                        <h2 className="title">{products_page.title}</h2>
                    )}
                    <div className="filter-sort">
                        <div className="filter">
                            <span className="filter-title">Filter:</span>
                            <span>
                                Availability <img src={ArrowDown} alt="arrow" />
                            </span>
                            <span>
                                Price <img src={ArrowDown} alt="arrow" />
                            </span>
                            <span>
                                Color <img src={ArrowDown} alt="arrow" />
                            </span>
                        </div>
                        <div className="sort">
                            <span className="sort-title">Sort by: </span>
                            <div
                                className={
                                    !selector
                                        ? "caption-wrapper"
                                        : "caption-wrapper selector"
                                }
                                onClick={() => setSelector((pre) => !pre)}
                            >
                                <span>{sortBy.sortBy}</span>
                                <img src={ArrowDown} alt="arrow" />
                            </div>
                            <div
                                className={
                                    !selector
                                        ? "selector-wrapper"
                                        : "selector-wrapper selector"
                                }
                            >
                                {products_page.sort.map((value, index) => {
                                    return (
                                        <span
                                            value={value}
                                            key={index}
                                            className={
                                                value == sortBy.sortBy
                                                    ? "current"
                                                    : ""
                                            }
                                            onClick={() =>
                                                setSortBy({
                                                    sortBy: value,
                                                    index,
                                                })
                                            }
                                        >
                                            {value}
                                        </span>
                                    );
                                })}
                            </div>
                            <span>{products_page.total} products</span>
                        </div>
                    </div>
                    <div id="products">
                        {stands
                            .slice((pageNumber - 1) * 16, pageNumber * 16)
                            .map((value, index) => (
                                <Card key={index} item={value} />
                            ))}
                    </div>
                    <div className="pagination_list">
                        {pageNumber >= 2 && (
                            <a href={backPage()}>
                                <img
                                    src={ArrowDown}
                                    alt="arrow"
                                    id="back"
                                    onClick={() =>
                                        setPageNumber(pageNumber - 1)
                                    }
                                />
                            </a>
                        )}
                        {pageNumber != 1 && (
                            <a href={backPage()}>{pageNumber - 1}</a>
                        )}
                        <a className="current-page">{pageNumber}</a>
                        {pageNumber != Math.ceil(stands.length / 16) && (
                            <a href={nextPage()}>{pageNumber + 1}</a>
                        )}
                        {pageNumber < Math.ceil(stands.length / 16) && (
                            <a href={nextPage()}>
                                <img
                                    src={ArrowDown}
                                    alt="arrow"
                                    id="next"
                                    onClick={() =>
                                        setPageNumber(pageNumber + 1)
                                    }
                                />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
