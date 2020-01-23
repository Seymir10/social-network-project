import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onMessageTextUpdateActionCreator, sendMessageActionCreator} from "../../redux/store";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageUpdate = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageTextUpdateActionCreator(text));
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {
                        props.state.dialogsData.map(d => {
                            return <DialogItem id={d.id} name={d.name} user_photo={d.user_photo}/>
                        })
                    }
                </div>

                <div className={s.messages}>
                    {
                        props.state.messagesData.map(m => {
                            return <Message message={m.message} />
                        })}
                </div>

            </div>

            <div className={s.sendMessageBox}>
                <textarea ref={newMessageElement} onChange={onMessageUpdate} value={props.text}/><br/>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>

    )
}

export default Dialogs;