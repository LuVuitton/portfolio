import React from "react";
import s from './Skills.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {OneSkill} from "./OneSkill/OneSkill";
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";
import reactImg from './../../other/icons/react.png'
import jsImg from './../../other/icons/js.png'
import reduxImg from './../../other/icons/redux.png'

    const skills = [
        {title: 'React', description:'Developing class and functional components to build user interfaces.\n' +
                'Working with component lifecycle and event handlers.\n' +
                'Using React Router to manage application routing.', img:reactImg},
        {title: 'JavaScript', description:'Typescript, ES5, ES6, Unit tests with Jest, REST-API.', img:jsImg},
        {title: 'Redux', description:'Using both legacy Redux and RTK.\n' +
                'Working with Redux Middleware to perform asynchronous operations.', img:reduxImg},
    ]


export const Skills = () => {

    const mappedSkills = skills.map((e,i)=>{
        return  <OneSkill key={i} skillTitle={e.title} skillDescription={e.description} skillImg={e.img}/>
    })



    return (
        <div className={s.mainWrapper} id={ 'skills'}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>
                <TitleGeneral title={'skills'}/>
                <div className={s.skillsList}>
                    {mappedSkills}
                </div>
            </div>
        </div>
    )
}