import React from 'react';
import { useState } from 'react';

import MainContainer from '../common/MainContainer';
import BlogPost from './BlogPost';
import getPosts from '../../services/fakeBlogServices'
import "./Blog.css"

function Blog(props) {
    const posts = getPosts()

    const [blogPosts, setBlogPosts] = useState(posts)


    const postActivate = (post) => {
        post.isActive ? post.isActive = false : post.isActive = true;
        setBlogPosts([...blogPosts])
    }


    return (
        <MainContainer navBar title="Blog">
            <div id="blog-photo" />
            <div id="blogPostCont">
                {blogPosts.map(post => <BlogPost key={post.id} title={post.title} postContent={post.content} onClick={() => postActivate(post)} active={post.isActive} />)}
            </div>
        </MainContainer>
    );
}

export default Blog;