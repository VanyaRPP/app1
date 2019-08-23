import React from 'react';
import c from './InfoMen.module.css'


const InfoMen = (props) => {
    return (
        
        <div className={c.Fon}>
            <div className={c.Ava}>

                <img src="https://cdn-prod.mortalkombat.com/roster/jade/thumb.png" />
            </div>
            <div className={c.Name}>
                Vanya Mischenchuck
            </div>


        </div>


    );
}
export default InfoMen;