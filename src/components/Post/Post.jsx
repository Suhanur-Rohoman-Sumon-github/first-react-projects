import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <div className='first'>
            <h3 >post from body{props.body}</h3>
            <p>poet form titale {props.title}</p>
        </div>
    );
};

export default Post;