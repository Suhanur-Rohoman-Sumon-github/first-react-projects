import React, { useEffect, useState } from 'react';
import Post from '../post/post';
import './Posts.css'


const Posts = () => {
    const [Posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div >
            <h1>hlw form Posts :{Posts.length} </h1>
            {
                console.log(Posts)
            }
            <div className='post'>
            {
                Posts.map(post => <Post
                    body={post.body}
                    title={post.title}
                ></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;