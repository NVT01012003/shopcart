import "../styles/home.scss";
const banners = [
    "//theme-dawn-demo.myshopify.com/cdn/shop/files/141569803_417219312901458_4638470652865432174_n.jpg?v=1637107084&width=3840",
    "//theme-dawn-demo.myshopify.com/cdn/shop/files/Mlouye.jpg?v=1637107315&width=3840",
];
// const products = [];

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
                        <button className="shop-btn">Shop now</button>
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
                <div className="products"></div>
            </div>
        </div>
    );
};
