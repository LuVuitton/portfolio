import React from "react";
import s from './Main.module.css'
import sContainer from '../../common/styles/GeneralContainer.module.css'


export const Main = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>
                <div className={s.text}>
                    <span>Hi</span>
                    <h1 className={s.text}>Name</h1>
                    <p>front-end dev</p>
                </div>
                <div className={s.photo}>photo</div>
            </div>
        </div>
    )
}