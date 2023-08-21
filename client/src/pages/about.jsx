import "../styles/info.scss";

const banner = [
    "https://theme-dawn-demo.myshopify.com/cdn/shop/files/Screen_Shot_2021-07-26_at_9.55_2_1420x_37337844-84ad-4c3b-97de-6e6821dde246.png?v=1642620619&width=500",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/files/Screen_Shot_2021-06-10_at_1.04_17_1420x_54862fc8-048f-4227-8f0a-aa9cacade5db.png?v=1642620682&width=500",
    "https://theme-dawn-demo.myshopify.com/cdn/shop/files/Screen_Shot_2021-06-10_at_1.07_1420x_c8bb7818-f914-4f44-90d9-cdec7c3f1a69.png?v=1642620705&width=500",
];

const about = {
    contents: [
        {
            content:
                "Mlouye’s founder and creative director Meb Rure hails from an industrial design background. In 2015, Meb decided to change gears and turn her energy towards Mlouye, a collection of exceptional handbags. Focusing on quality material, good design, craftsmanship and sustainability, Mlouye reflects the epitome of quality over quantity.",
        },
        {
            content:
                "Meb was highly inspired by the Bauhaus Movement's artists and architects. From Mies van der Rohe's works to Kandinsky's paintings, to Aalto's furniture, she acquired a rationalist vision of design by gleaning how they served a utilitarian purpose in a cleverly simple way. Mlouye merges industrial design and fashion, creating functional handbags made of luxurious and honest materials to improve people's lives in small but important ways.",
        },
        {
            content:
                "Innovation being the key factor alongside aesthetic, Mlouye has brought unexpected shapes with smart details, functionality and a new luxury feel with a contemporary price point.",
        },
        {
            content:
                "Istanbul is where Mlouye was born, the company's headquarters is now split between the US, and Turkey.",
        },
    ],
    promise:
        "Quality is never an accident. It is always the result of intelligent effort. We spend most of our time and energy for good design and to achieve high quality. Every single detail from material to technique is thought through with obsessive attention. If our product doesn't satisfy you, we'll take it back.",
};

export const AboutUs = () => {
    return (
        <div className="aboutus-container container">
            <div className="wrapper">
                <div className="aboutus">
                    <div className="banner">
                        {banner.map((value, index) => (
                            <div className="banner-item" key={index}>
                                <img src={value} alt={`banner-${index}`} />
                            </div>
                        ))}
                    </div>
                    <div className="about">
                        <div className="about-content">
                            <h2>About</h2>
                            <div className="content">
                                {about.contents.map((value, index) => (
                                    <span key={index}>{value.content}</span>
                                ))}
                            </div>
                        </div>
                        <div className="promise">
                            <h3>Our quality promise</h3>
                            <span>{about.promise}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
