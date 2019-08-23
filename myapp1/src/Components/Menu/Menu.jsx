import React from 'react';
import c from './Menu.module.css'
const Menu = () => {
    return (
        <div className={c.Menu}>

            <div clasName={c.item}>
                <a>My Profile</a>
            </div>
            <div clasName={c.item}>
                <a>Mesage</a>
            </div>
            <div clasName={c.item}>
                <a>Music</a>
            </div>
            <div clasName={c.item}>
                <a>News</a>
            </div>
            <div clasName={c.item}>
                <a>Setinds</a>
            </div>

        </div>

    );
}
export default Menu;