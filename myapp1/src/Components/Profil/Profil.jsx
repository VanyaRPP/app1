import React from 'react';
import c from './Profil.module.css'
import Post from './Mypost/Post/Post';
import Post1 from './Mypost/Post/Post1/Post1';
import InfoMen from './InfoMen/InfoMen';
//import Mypost from './Mypost/Post/Mypost';
const Profil = (props) => {
    
    return (
        <div className={c.Profil}>
            <InfoMen />
            <Post postData={props.postData}/>
        </div>

    );
}
export default Profil;