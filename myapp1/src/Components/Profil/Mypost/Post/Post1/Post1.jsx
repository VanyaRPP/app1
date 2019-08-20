import React from 'react';
import c from './Post1.module.css'

const Post1 = (props) => {
    return (

        <div className={c.Post1}>

            <div>
                <img src="https://cdn-prod.mortalkombat.com/roster/jade/thumb.png" />
                {props.sms}
                <div className="Like">
                    <span>Like!</span>[{props.like}]
                    <span>Dislike!</span>[{props.dlike}]
                </div>

            </div>
        </div>


    );
}
export default Post1;