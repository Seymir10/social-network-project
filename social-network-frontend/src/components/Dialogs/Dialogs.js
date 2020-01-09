import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
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
    )
}

export default Dialogs;