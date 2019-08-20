import React from 'react';
import c from './InfoMen.module.css'

const InfoMen = (props) => {
    return (
        <div clasName={c.AvaN}>
            <div className={c.Fon}>
                <div className={c.Ava}>

                    <img src="https://cdn-prod.mortalkombat.com/roster/jade/thumb.png" />
                </div>
                <div className={c.Name}>
                    Vanya
                </div>


            </div>

        </div>
    );
}
export default InfoMen;