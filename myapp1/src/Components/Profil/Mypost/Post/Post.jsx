import React from 'react';
import c from './Post.module.css'
import Post1 from './Post1/Post1';

const Post = (props) => {
    return (
        <div>
            <textarea></textarea>
            <button>New post</button>
            <div clasName={c.Posts}>
                <Post1 sms="HI.HOW ARE YOU"like="15"dlike='1'/>
                <Post1 sms="HI."like="1500"dlike='100'/>
                <Post1 sms="HI.LLL"like="15500"dlike='100'/>
                <Post1 sms="HI."like="456"dlike='54'/>
                <Post1 sms="HI.LOL"like="7564"dlike='88'/>

            </div>


        </div>

    );
}
export default Post;