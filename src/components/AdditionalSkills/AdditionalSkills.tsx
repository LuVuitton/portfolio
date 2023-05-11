import React from "react";
import s from './AdditionalSkills.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'


export const AdditionalSkills = () => {

    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <h4 className={s.title}>Additional Skills:</h4><p className={s.description}><b>Node.js, Express.js,</b> REST-API, git, GitHub, storyBook,  webFlow,</p>
            </div>
        </div>
    )
}

