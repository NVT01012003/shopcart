import { useContext } from "react";
import { BlogCard } from "../components/blogCad";
import { BlogContext } from "../context/blogContext";

export const Blogs = () => {
    let { blogs } = useContext(BlogContext);
    blogs = Object.values(blogs);
    return (
        <div className="blogs-container container">
            <div className="wrapper">
                <div className="blogs">
                    <h2>News</h2>
                    <div className="first_blog">
                        <BlogCard item={blogs[0]} size="large" />
                    </div>
                    <div className="blogs-wrapper">
                        {blogs.slice(1).map((value, index) => (
                            <BlogCard key={index} item={value} size="medium" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
