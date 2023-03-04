import React from "react";
import s from './Skills.module.css'
import sContainer from '../../common/styles/GeneralContainer.module.css'


export const Skills = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <h1 className={s.title}>title</h1>
                <div className={s.text}>text</div>

            </div>
        </div>
    )
}