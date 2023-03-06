import React from "react";
import s from './Nav.module.scss'

export const Nav = ()=> {
    return (
        <nav className={s.nav}>
            <a href="">Main</a>
            <a href="">Skill</a>
            <a href="">Projects</a>
            <a href="">Get in Touch</a>
        </nav>
    )
}