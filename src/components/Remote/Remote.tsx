import React from "react";
import s from './Remote.module.css'
import sContainer from '../../common/styles/GeneralContainer.module.css'


export const Remote = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <h3 className={s.text}>looking into remote work options</h3>

                <button className={s.button}>button</button>

            </div>
        </div>
    )
}