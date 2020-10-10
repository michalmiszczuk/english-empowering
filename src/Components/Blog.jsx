import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import "./CSS/Blog.css"
import BlogPost from './BlogPost';
import getPosts from '../services/fakeBlogServices'
import { useState } from 'react';

function Blog(props) {
    const posts = getPosts()

    const [blogPosts, setBlogPosts] = useState(posts)


    const postActivate = (post) => {
        post.isActive ? post.isActive = false : post.isActive = true;
        setBlogPosts([...blogPosts])
    }


    return (
        <div id="mainBlogCont" >
            <NavBar name="Blog" />
            <div id="blogPhoto"></div>
            <div id="blogPostCont">
                {blogPosts.map(post => <BlogPost key={post.id} title={post.title} postContent={post.content} onClick={() => postActivate(post)} active={post.isActive} />)}
            </div>
            <Footer />
        </div>
    );
}

export default Blog;