import React from "react";
import s from './Skills.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {OneSkill} from "./OneSkill/OneSkill";
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";


export const Skills = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>
                <TitleGeneral title={'skills'}/>
                <div className={s.skillsList}>
                    <OneSkill/>
                    <OneSkill/>
                    <OneSkill/>
                </div>
            </div>
        </div>
    )
}