import React from 'react';
import c from './Post.module.css'
import Post1 from './Post1/Post1';

const Post = (props) => {
    
    let postElement=props.postData.map(postt=><Post1 sms={postt.mes} like={postt.like} dlike={postt.dlike} />)
    return (
        <div>
            <textarea></textarea>
            <button>New post</button>
            <div clasName={c.Posts}>
                {postElement}
            </div>


        </div>

    );
}
export default Post;