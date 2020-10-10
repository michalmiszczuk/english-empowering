import React from 'react';
import "./CSS/Blog.css"

function BlogPost({ title, postContent, onClick, active }) {

    return (
        <div className={active ? "blogPostActive" : "blogPost"} onClick={onClick}>
            <div className="postTitle">{title}</div>
            <div className={active ? "postContentActive" : "postContent"}
            >{postContent}</div>
        </div >
    );
}

export default BlogPost;


