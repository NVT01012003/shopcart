import "../styles/blogcard.scss";

export const BlogCard = ({ item, size }) => {
    return (
        <div
            className="blogcard-wrapper"
            id={size == "large" ? "large" : "medium"}
        >
            <img src={item.article_photo} alt="article-photo" />
            <div>
                <h4 className="title">{item.title}</h4>
                <span className="date">{item.date}</span>
                <span className="content">{item.content[0]}</span>
            </div>
        </div>
    );
};
