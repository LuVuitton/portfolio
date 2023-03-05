import React from "react";
import s from './MyProjects.module.css'
import sContainer from "../../common/styles/GeneralContainer.module.css";
import {OneProject} from "./OneProject/OneProject";
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";


export const MyProjects = () => {


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

