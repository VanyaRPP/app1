import React from 'react';
import c from './Messages.module.css'
const Messages = () => {
    return (
        <div clasName= {c.Dialogs}>
            <div className={c.Dialog}>
                <div clasName={c.dialog1}>
                    Vanya
                </div>
                <div clasName={c.dialog1}>
                    Sanya
                </div>
            </div>
            <div className={c.Messages}>
                    LLALALALALALLA
            </div>
        </div>
        
    );
}
export default Messages;