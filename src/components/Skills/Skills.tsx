import React from "react";
import s from './Skills.module.css'
import sContainer from '../../common/styles/GeneralContainer.module.css'
import {OneSkill} from "./OneSkill/OneSkill";


export const Skills = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>
                <h1 className={s.title}>Skills</h1>
                <div className={s.skillsList}>
                    <OneSkill/>
                    <OneSkill/>
                    <OneSkill/>
                </div>
            </div>
        </div>
    )
}