import React from 'react';
import c from './Menu.module.css'
import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <div className={c.Menu}>

            <div clasName={c.item}>
                <NavLink to="/Profil" activeClassName={c.active}>My Profile</NavLink>
            </div>
            <div clasName={c.item}>
                <NavLink to="/Messages" activeClassName={c.active}>Messages</NavLink>
            </div>
            <div clasName={c.item}>
                <NavLink to="/Music" activeClassName={c.active}>Music</NavLink>
            </div>
            <div clasName={c.item}>
                <NavLink to="/News" activeClassName={c.active}>News</NavLink>
            </div>
            <div clasName={c.item}>
                <NavLink to="/Setings" activeClassName={c.active}>Setings</NavLink>
            </div>

        </div>

    );
}
export default Menu;