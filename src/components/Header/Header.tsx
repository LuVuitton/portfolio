import React from "react";
import {Nav} from "../Nav/Nav";
import s from './Header.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'


export const Header = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${s.container} ${sContainer.generalContainer}`}>
                <header className={s.header}>
                    <Nav/>
                </header>
            </div>
        </div>
    )
}