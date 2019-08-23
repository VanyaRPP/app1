import React from 'react';
import c from './Menu.module.css'

const Menu = () => {
    return (
        <div className={c.Menu}>

            <div clasName={c.item}>
                <a href="/Profil">My Profile</a>
            </div>
            <div clasName={c.item}>
                <a href="/Messages">Messages</a>
            </div>
            <div clasName={c.item}>
                <a href="/Music">Music</a>
            </div>
            <div clasName={c.item}>
                <a href="/News">News</a>
            </div>
            <div clasName={c.item}>
                <a href="/Setings">Setings</a>
            </div>

        </div>

    );
}
export default Menu;