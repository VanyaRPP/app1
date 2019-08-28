import React from 'react';
import c from './Post.module.css'
import Post1 from './Post1/Post1';

const Post = (props) => {
    let postData = [
        { id: 1, mes: 'HI.HOW ARE YOU', like: 15, dlike: 3 },
        { id: 2, mes: 'HI.', like: 345, dlike: 457 },
        { id: 3, mes: 'HI.LLL', like: 4357, dlike: 475 },
        { id: 4, mes: 'HI.', like: 475, dlike: 547 },
        { id: 5, mes: 'HI.LOL', like: 457, dlike: 154 },
        { id: 6, mes: 'Vanya', like: 574, dlike: 153 },
    ]
    let postElement=postData.map(postt=><Post1 sms={postt.mes} like={postt.like} dlike={postt.dlike} />)
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