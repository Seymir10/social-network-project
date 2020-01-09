import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog +' ' + s.active}>
            <div>
                <img alt='user' src={props.user_photo} />
            </div>

            <div>
                <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
            </div>


        </div>
    )
}

export default DialogItem;