import React from "react";
import s from './MyProjects.module.css'
import sContainer from "../../common/styles/GeneralContainer.module.css";
import {OneProject} from "./OneProject/OneProject";


export const MyProjects = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>
                <h1 className={s.title}>MyProjects</h1>
                <div className={s.projectList}>
                    <OneProject/>
                    <OneProject/>
                </div>
            </div>
        </div>
    )
}