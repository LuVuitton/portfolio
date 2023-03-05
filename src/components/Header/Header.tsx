import React from "react";
import {Nav} from "../Nav/Nav";
import s from './Header.module.css'
import sContainer from './../../common/styles/GeneralContainer.module.css'



export const Header = () => {


    return (
        <div className={`${s.container} ${sContainer.generalContainer}`}>
        <header className={s.header}>
            <Nav/>
       </header>
        </div>
    )
}