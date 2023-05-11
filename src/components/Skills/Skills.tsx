import React from "react";
import s from './Skills.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {OneSkill} from "./OneSkill/OneSkill";
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";
import reactImg from './../../other/icons/react.png'
import jsImg from './../../other/icons/js.png'
import reduxImg from './../../other/icons/redux.png'

    const skills = [
        {title: 'React', description:'React is a JavaScript library for building user interfaces, released by Facebook in 2013.\n' +
                'It\'s designed to make it easy to create reusable UI components and manage their state in a way that\'s efficient and easy to reason about.\n' +
                'React uses a virtual DOM (document object model) to improve performance by reducing the amount of DOM manipulation required. ', img:reactImg},
        {title: 'JavaScript', description:'Redux is a JavaScript library for managing the state of an application.\n' +
                'It\'s designed to make it easy to keep track of changes to the state and ensure that updates are made in a predictable and efficient way.\n' +
                'Redux uses a single store to hold the state of the entire application, with actions and reducers used to update it.', img:jsImg},
        {title: 'Redux', description:'JavaScript is a programming language used primarily for creating dynamic, interactive web content.\n' +
                'It was first released in 1995 and has since become one of the most widely used languages in the world.\n' +
                'JavaScript is used for both front-end (client-side) and back-end (server-side) development.', img:reduxImg},
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