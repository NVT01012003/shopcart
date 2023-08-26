import "../styles/blogcard.scss";

export const BlogCard = ({ item, size }) => {
    return (
        <a
            href={`/info/blog/${item.id}`}
            id={size == "large" ? "large" : "medium"}
        >
            <div className="blogcard-wrapper">
                <div className="img-wrapper">
                    <img src={item.article_photo} alt="article-photo" />
                </div>
                <div>
                    <h3 className="title">{item.title}</h3>
                    <span className="date">{item.date}</span>
                    <span className="desc">
                        {size == "large" ? item.desc : item.content[0].text}
                    </span>
                </div>
            </div>
        </a>
    );
};
