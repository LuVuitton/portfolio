import React from "react";
import s from './MyProjects.module.scss'
import sContainer from "../../common/styles/GeneralContainer.module.scss";
import {OneProject} from "./OneProject/OneProject";
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";
import todo from './../../other/image/todo.png'
import social from './../../other/image/socnet.png'
import {v1} from "uuid";





export const MyProjects = React.memo(() => {

    const oneProjectData:OneProjectType = [
        {
            id: v1(),
            bgImg: {backgroundImage: `url(${todo})`},
            projectName: 'to do list',
            description: 'Developed a task manager on React with CRUD functionality and user authentication. Implemented REST API requests to fetch data and added error handling in the form of pop-ups for failed requests and form submission, using Formik for login form. Switched from Redux to Redux Toolkit during development to reduce code and improve application performance. Stored application state as an associative array, making it easier to work with data. Additionally, useCallback, React.memo, and useMemo were used for performance optimization. Material UI was used for UI design, and Jest was used for testing.',
            gitRepositoryURL: 'https://github.com/LuVuitton/1-todolist',
            gitPagesURL:'https://luvuitton.github.io/1-todolist/'

        },
        {
            id: v1(),
            bgImg: {backgroundImage: `url(${social})`},
            projectName: 'social network',
            description: 'The social network is written in class components and Legacy Redux. The application has the ability to authenticate users, edit profile, view other users\' pages, and subscribe/unsubscribe. To improve code performance and reusability, I utilized High Order Components, and for testing, I used Jest. For styling the application, I used modular CSS',
            gitRepositoryURL: 'https://github.com/LuVuitton/samurai-way-main',
            gitPagesURL:'https://luvuitton.github.io/samurai-way-main/'
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

                <TitleGeneral title={'my projects'}/>

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
