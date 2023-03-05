import React from "react";
import s from './MyProjects.module.css'
import sContainer from "../../common/styles/GeneralContainer.module.css";
import {OneProject} from "./OneProject/OneProject";
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";
// import todo from './../../../src/assets/image/todo'
// import social from './../../../src/assets/image/social'


export const MyProjects = () => {

    const oneProjectStyl = [
        {color: 'blue', bgImg: `url${''}`}
    ]

    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <TitleGeneral title={'myprojects'}/>

                <div className={s.projectList}>
                    <OneProject/>
                    <OneProject/>
                </div>

            </div>
        </div>

    )
}

