import React from 'react';
import c from './Messages.module.css'
import Dialogitems from './Dialogitem/Dialogitem';
import Message from './Message/Message';
const Messages = () => {
    return (
        <div className={c.Dialogs}>
            <div className={c.dial}>
                <Dialogitems name="Vanya" id="1" />
                <Dialogitems name="Sanya" id="2" />
                <Dialogitems name="Kolya" id="3" />
                <Dialogitems name="Zenya" id="3" />
                <Dialogitems name="Tolya" id="4" />
                <Dialogitems name="Uma" id="5" />
            </div>

            <div className={c.mess}>
                <Message smska="Hi!" />
                <Message smska="Hi! How are you?" />
                <Message smska="Hi!" />
                <Message smska="Hi! How are you?" />
                <Message smska="Hi!" />
                <Message smska="Hi! How are you?" />
                <Message smska="Hi!" />
                <Message smska="Hi! How are you?" />
                <Message smska="Hi!" />
                <Message smska="Hi! How are you?" />
                <Message smska="Hi!" />
                <Message smska="Hi! How are you?" />
                <Message smska="Hi!" />
            </div>
        </div>
    );
}
export default Messages;