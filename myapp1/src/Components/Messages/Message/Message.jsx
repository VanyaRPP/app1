import React from 'react';
import c from './Message.module.css';
import { NavLink } from "react-router-dom";

const Message = (props) => {
    return (
        <div clasNamr={c.Message}>
              {props.smska}  
        </div>
    )
}
export default Message;