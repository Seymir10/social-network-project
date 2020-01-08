import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Samir'},
        {id : 2, name: 'Sakina'},
        {id : 3, name: 'Gektor'},
        {id : 4, name: 'Asad'},
        {id : 5, name: 'Gulten'},
        {id : 6, name: 'Aytach'}
    ];

    let messagesData = [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'Hey! Wassup?'},
        {id: 3, message: 'Tired...((('}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsData.map(d => {
                        return <DialogItem id={d.id} name={d.name} />
                    })
                }
            </div>

            <div className={s.messages}>
                {messagesData.map(m => {
                    return <Message message={m.message} />
                })}
            </div>

        </div>
    )
}

export default Dialogs;