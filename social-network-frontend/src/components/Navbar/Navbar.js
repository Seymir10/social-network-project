import React from "react";
import navbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={navbar.navigation_menu}>
            <ul>
                <li className={navbar.item}><NavLink to='/profile' activeClassName={navbar.active}>Profile</NavLink></li>
                <li className={navbar.item}><NavLink to='/dialogs' activeClassName={navbar.active}>Messages</NavLink></li>
                <li className={navbar.item}><NavLink to='/news' activeClassName={navbar.active}>News</NavLink></li>
                <li className={navbar.item}><NavLink to='/music' activeClassName={navbar.active}>Music</NavLink></li>
                <li className={navbar.item}><NavLink to='/settings' activeClassName={navbar.active}>Settings</NavLink>
                </li>
            </ul>

            <div className={navbar.sidebar}>
                <div>Friends</div>
                <div className={navbar.friends}>
                    <Friends friends={props.state.friends} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;