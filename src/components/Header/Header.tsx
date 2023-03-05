import React from "react";
import {Nav} from "../Nav/Nav";
import s from './Header.module.css'



export const Header = () => {


    return (
        <header className={s.header}>
            <Nav/>
       </header>
    )
}