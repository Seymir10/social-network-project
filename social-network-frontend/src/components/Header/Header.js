import React from "react";
import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <span><img alt="logo" src="https://www.jing.fm/clipimg/full/82-824068_aperture-science-logo-png.png"/></span>
            </div>

            <div className={s.header_app_name}>
                <h1>Get in touch. Globally</h1>
            </div>
        </header>
    )
}

export default Header;