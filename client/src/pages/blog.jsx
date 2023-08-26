import Upload from "../imgs/upload.png";
import Next from "../imgs/next.png";
import { useContext } from "react";
import { BlogContext } from "../context/blogContext";
import { useParams } from "react-router-dom";
import "../styles/blog.scss";
export const Blog = () => {
    const { blogs } = useContext(BlogContext);
    const { id } = useParams();
    const blog = blogs[id];

    return (
        <div className="blog-container">
            <img src={blog.article_photo} alt="article-photo" />
            <div className="container">
                <div className="wrapper">
                    <div className="blog">
                        <h2>{blog.title}</h2>
                        <span className="date">{blog.date}</span>
                        <div className="share">
                            <img src={Upload} alt="upload-icon" />
                            Share
                        </div>
                        <div className="content">
                            {blog.content.map((value, index) => {
                                if (value.text)
                                    return (
                                        <span
                                            className="content-item"
                                            key={index}
                                        >
                                            {value.text}
                                        </span>
                                    );
                                else if (value.photo)
                                    return (
                                        <img
                                            src={value.photo}
                                            alt="blog-img"
                                            key={index}
                                        />
                                    );
                                else if (value.product)
                                    return (
                                        <div
                                            className="blog-product-wrapper"
                                            key={index}
                                        >
                                            <img
                                                src={value.product.photo}
                                                alt="blog-product-img"
                                            />
                                            <div className="details">
                                                {value.product.details.map(
                                                    (detail, index) => (
                                                        <span
                                                            className="detail"
                                                            key={index}
                                                        >
                                                            •
                                                            <span>
                                                                {detail}
                                                            </span>
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                            <a
                                                className="product-link"
                                                href={value.product.link}
                                            >
                                                View product
                                            </a>
                                        </div>
                                    );
                            })}
                        </div>
                        <div className="btn-back-wrapper">
                            <a href="/info/blog">
                                <button>
                                    <img src={Next} alt="back-btn" />
                                    Back to blog
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
