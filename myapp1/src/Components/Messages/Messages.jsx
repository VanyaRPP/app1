import React from 'react';
import c from './Messages.module.css'
import Dialogitems from './Dialogitem/Dialogitem';
import Message from './Message/Message';
const Messages = (props) => {
    let dialogData = [
        { id: 1, name: 'Vanya' },
        { id: 2, name: 'Sanya' },
        { id: 3, name: 'Kolya' },
        { id: 4, name: 'Zenya' },
        { id: 5, name: 'Tolya' },
        { id: 6, name: 'Uma' },
    ]

    let dialogElements = dialogData.map(dia => <Dialogitems name={dia.name} id={dia.id} />);

    let MessageData = [
        { id: 1, Message: 'Hi!' },
        { id: 2, Message: 'Hi! How are you?' },
        { id: 3, Message: 'Hi!' },
        { id: 4, Message: 'Hi! How are you?' },
        { id: 5, Message: 'Hi!' },
        { id: 6, Message: 'Hi! How are you?' },
        { id: 7, Message: 'Hi!Vanyuafsk)' },
    ]

let MessageElements = MessageData.map(mes=><Message smska={mes.Message} ig={mes.id}/>);

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