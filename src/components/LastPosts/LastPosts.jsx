import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import PostCard from '../PostCard/PostCard';

function LastPosts() {
    const [posts, usePosts] = useState([]);

    const postsURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}blog/posts/`
    const postArray = () => {
        return posts.map((item, index) => <PostCard key={ index } post={ item } />);
    }


    const loadHandle = () => {
        axios.get(postsURL)
            .then(res => {
                usePosts(res.data);
                console.log(posts);
            })
            .catch(error => console.log(error));
        console.log(posts);
    }

//    useEffect(loadHandle, []);

    return (
        <section className='lastPosts__section'>

            { postArray() }
            <h3>cards </h3>
        </section>
    )
}

export default LastPosts