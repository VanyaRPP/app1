import React from 'react';
import c from './Dialogitem.module.css';
import { NavLink } from "react-router-dom"

const Dialogitem = (props) => {
    return (
        <div clasNamr={c.Dialog}>
            <div>
                <NavLink to={'/Messages/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}
export default Dialogitem;