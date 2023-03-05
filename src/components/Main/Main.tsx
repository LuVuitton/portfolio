import React from "react";
import s from './Main.module.css'
import sContainer from '../../common/styles/GeneralContainer.module.css'


export const Main = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${s.container} ${sContainer.generalContainer}`}>
                <div className={s.text}>
                    <span>Hi</span>
                    <h1 className={s.title}>Felix Tekhada</h1>
                    <h3 className={s.text}>front-end developer</h3>
                </div>
                <div className={s.photo}>photo</div>
            </div>
        </div>
    )
}