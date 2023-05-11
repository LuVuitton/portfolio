import React from "react";
import s from './MyProjects.module.scss'
import sContainer from "../../common/styles/GeneralContainer.module.scss";
import {OneProject} from "./OneProject/OneProject";
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";
import todo from './../../../src/assets/image/todo.png'
import social from './../../../src/assets/image/social.png'
import {v1} from "uuid";





export const MyProjects = React.memo(() => {

    const oneProjectData:OneProjectType = [
        {
            id: v1(),
            bgImg: {backgroundImage: `url(${todo})`},
            projectName: 'to do list',
            description: 'it is To do list',
            gitRepositoryURL: 'https://github.com/LuVuitton/1-todolist',
            gitPagesURL:''

        },
        {
            id: v1(),
            bgImg: {backgroundImage: `url(${social})`},
            projectName: 'social network',
            description: 'e come facebook',
            gitRepositoryURL: 'https://github.com/LuVuitton/samurai-way-main',
            gitPagesURL:''
        }
    ]
    const generalStyles:GeneralStylesType = {
        buttonsStyle: {padding: '5px 20px'},
        lookBtnStyle: {
            zIndex: '1'
        }
    }


    const mappedProjects = oneProjectData.map(e => {
        return (
            <OneProject
                key={e.id}
                projectName={e.projectName}
                description={e.description}
                bgImg={e.bgImg}
                btnStyle={generalStyles.buttonsStyle}
                lookBtnStyle={generalStyles.lookBtnStyle}
                gitPagesURL={e.gitPagesURL}
                gitRepositoryURL={e.gitRepositoryURL}
            />
        )
    })

    return (
        <div className={s.mainWrapper} id={'projects'}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <TitleGeneral title={'myprojects'}/>

                <div className={s.projectList}>
                    {mappedProjects}
                </div>

            </div>
        </div>

    )
})



type OneProjectType = Array<{
    id: string,
    bgImg: { backgroundImage: string },
    projectName: string,
    description: string,
    gitRepositoryURL:string,
    gitPagesURL:string
}>


type GeneralStylesType = {
    buttonsStyle: {padding: string},
    lookBtnStyle: {
        zIndex: string
    }
}
