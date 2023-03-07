import React from "react";
import s from './MyProjects.module.scss'
import sContainer from "../../common/styles/GeneralContainer.module.scss";
import {OneProject} from "./OneProject/OneProject";
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";
import todo from './../../../src/assets/image/todo.png'
import social from './../../../src/assets/image/social.png'
import {v1} from "uuid";


export const MyProjects = () => {

    const oneProjectData = [
        {
            id: v1(),
            bgImg: {backgroundImage: `url(${todo})`},
            projectName: 'To Do List',
            description: 'it is To do list'
        },
        {
            id: v1(),
            bgImg: {backgroundImage: `url(${social})`},
            projectName: 'social network',
            description: 'e come facebook'
        }
    ]
    const generalStyles = {
        buttonsStyle: {padding: '5px 20px'},
        lookBtnStyle: {
            zIndex: '1'
        }
    }


    const mappedProjects = oneProjectData.map(e => {
        return <OneProject
            key={e.id}
            projectName={e.projectName}
            description={e.description}
            bgImg={e.bgImg}
            btnStyle={generalStyles.buttonsStyle}
            lookBtnStyle={generalStyles.lookBtnStyle}
        />
    })

    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <TitleGeneral title={'myprojects'}/>

                <div className={s.projectList}>
                    {mappedProjects}
                </div>

            </div>
        </div>

    )
}

