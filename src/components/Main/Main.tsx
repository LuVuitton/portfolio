import React from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'


export const Main = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${s.container} ${sContainer.generalContainer}`}>
                <div className={s.content}>
                    <span>Hi</span>
                    <h1 className={s.title}>Felix Tekhada</h1>
                    <h3 className={s.text}>front-end developer</h3>
                </div>
                <div className={s.photo}>photo</div>
            </div>
        </div>
    )
}