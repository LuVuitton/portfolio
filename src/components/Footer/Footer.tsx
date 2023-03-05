import React from "react";
import s from './Footer.module.css'
import sContainer from '../../common/styles/GeneralContainer.module.css'


export const Footer = () => {


    return (
        <footer className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <h3 className={s.text}>Name</h3>

                <div className={s.iconsBlock}>
                    <div className={s.icon}>icon</div>
                    <div className={s.icon}>icon</div>
                    <div className={s.icon}>icon</div>
                    <div className={s.icon}>icon</div>
                </div>

                <p>footer text 2013</p>

            </div>
        </footer>
    )
}