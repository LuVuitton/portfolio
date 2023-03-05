import React from "react";
import s from './Nav.module.scss'

export const Nav = ()=> {
    return (
        <nav className={s.nav}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </nav>
    )
}