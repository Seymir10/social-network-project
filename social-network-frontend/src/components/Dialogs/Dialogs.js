import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onMessageTextUpdateActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    let newMessageBodyText = props.text;

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageUpdate = (e) => {
        let text = e.target.value;
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
                <textarea onChange={onMessageUpdate} value={newMessageBodyText}/><br/>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>

    )
}

export default Dialogs;