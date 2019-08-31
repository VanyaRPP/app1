import React from 'react';
import c from './Messages.module.css'
import Dialogitems from './Dialogitem/Dialogitem';
import Message from './Message/Message';
const Messages = (props) => {

    let dialogElements = props.dialogData.map(dia => <Dialogitems name={dia.name} id={dia.id} />);

    let MessageElements = props.MessageData.map(mes => <Message smska={mes.Message} ig={mes.id} />);

    return (
        <div className={c.Dialogs}>
            <div className={c.dial}>
                {dialogElements}
            </div>

            <div className={c.mess}>
                {MessageElements}
            </div>
        </div>
    );
}
export default Messages;