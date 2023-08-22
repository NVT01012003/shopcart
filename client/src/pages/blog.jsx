const blogs = [
    {
        title: "The Mlouye origin story",
        article_photo:
            "https://theme-dawn-demo.myshopify.com/cdn/shop/articles/road-trip_1500x_178024d6-5e83-44a7-947c-28628e37337e.jpg?v=1642551413&width=1500",
        content: [
            {
                text: "Mlouye’s founder and creative director Meb Rure hails from an industrial design background. In 2015, Meb decided to change gears and turn her energy towards Mlouye, a collection of exceptional handbags. Focusing on quality material, good design, craftsmanship and sustainability, Mlouye reflects the epitome of quality over quantity.",
            },
            {
                text: "Meb was highly inspired by the Bauhaus Movement's artists and architects. From Mies van der Rohe's works to Kandinsky's paintings, to Aalto's furniture, she acquired a rationalist vision of design by gleaning how they served a utilitarian purpose in a cleverly simple way. Mlouye merges industrial design and fashion, creating functional handbags made of luxurious and honest materials to improve people's lives in small but important ways.",
            },
            {
                photo: "Innovation being the key factor alongside aesthetic, Mlouye has brought unexpected shapes with smart details, functionality and a new luxury feel with a contemporary price point.",
            },
            {
                text: "Istanbul is where Mlouye was born, the company's headquarters is now split between the US, and Turkey.",
            },
        ],
        date: "JANUARY 18, 2022",
    },
    {
        title: "Introducing stormi",
        article_photo:
            "https://theme-dawn-demo.myshopify.com/cdn/shop/articles/mlouye-homepage-new-stormi-desk_1500x_e12d5a6d-dfdf-4c45-93ed-c1e77f36b6ff.jpg?v=1642551478&width=1500",
        content: [
            {
                text: "“Stormi is Objet d'art with its unique and sculptural design inspired by nature’s favorite form - swirl. It is the form of constant movement and transmitting energy from galactic scales to the double helix structure of DNA. To make this project happen, we went through a challenging development and used new techniques never used in the industry previously.” says Meb Rure, Creative Director at Mlouye.",
            },
            {
                text: `The Stormi Bag takes utilitarianism seriously, featuring dual straps. The one-size leather strap is ideal for slinging over the shoulder snugly and a marble-effect acrylic chain serves as either a top handle or a shorter shoulder strap. Designed to carry only the essentials, and one card slot features on the rear side for easy card access.`,
            },
            {
                photo: "https://cdn.shopify.com/s/files/1/0551/7626/5784/files/mlouye-stormi-latte-12_1800x1800_2b76145c-7588-45c4-8215-9bac3b6c82a9_1024x1024.jpg?v=1629817467",
            },
        ],
        date: "JANUARY 18, 2022",
    },
    {
        title: "Introducing the latest creation in our Pleated Collection",
        article_photo:
            "https://theme-dawn-demo.myshopify.com/cdn/shop/articles/mlouye-brick-macaron-6_1800x1800_1500x_bee06f93-e73d-4a8a-820d-a5546842598c.jpg?v=1642550609&width=1500",
        content: [
            {
                text: "Introducing the latest creation in our Pleated Collection, Brick presents an architectural elegance.",
            },
            {
                text: "Its front face showcases folded leather with zigzag edges – an evolution of the technique and craftsmanship. A tonal logo accents the bottom of the bag. Inspired by the structural boxy form and shape of a brick, which lends its name, the bag is perfectly sized for your everyday essentials, from a large phone to your wallet and lipstick.",
            },
            {
                text: "It features a detachable, adjustable strap so can be worn as a crossbody or shoulder bag, or as a top handle design. A practical magnetic closure secures your belongings.",
            },
            {
                product: {
                    photo: "https://cdn.shopify.com/s/files/1/0551/7626/5784/files/images-brick_2048x2048.jpg?v=1629817010",
                    details: [
                        "Hand-crafted from Italian cow leather. Ultrasuede® interior.",
                        "Comes with a detachable and adjustable shoulder strap. ",
                        "w:19 X h:11 X d:5.5 cm (7.5 X 4.5 X 2.2 in)",
                    ],
                    link: "/",
                },
            },
        ],
        date: "JANUARY 18, 2022",
    },
];

export const Blog = () => {
    return (
        <div className="blog-container container">
            <div className="wrapper">
                <div className="blog"></div>
            </div>
        </div>
    );
};
