import React from "react";
import s from './Footer.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'


export const Footer = () => {


    return (
        <footer className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <h3 className={s.text}>FELIX TEKHADA</h3>

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