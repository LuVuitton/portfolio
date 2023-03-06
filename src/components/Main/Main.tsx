import React, {useEffect, useState} from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";


export const Main = () => {
    console.log('state')

    const string = 'front end developer'
    const arrText =  Array.from(string)

    let [text, setText] = useState<Array<string>>([])
    // let [x, setX] = useState(true)

    useEffect(() => {
        const newArr: string[] = []
        let i = 0
        console.log('in effect')

     const x = setInterval(() => {
            if (i < arrText.length) {
                setText([...newArr, arrText[i]])
                newArr.push(arrText[i])
                i++
            } else {
                newArr.pop()
                setText([...newArr])
                i--
            }
        }, 90000)
    }, [])


    return (
        <div className={s.mainWrapper}>
            <div className={`${s.container} ${sContainer.generalContainer}`}>
                <div className={s.content}>

                    <span>Hi, i'm</span>
                    <h1 className={s.title}>Felix Tekhada</h1>
                    <h3 className={s.text}>{text}</h3>
                    <ButtonGeneral type="button" title={'Get in Touch'} callback={() => {
                    }}/>

                </div>
                {/*<div className={s.photo}>photo</div>*/}
            </div>
        </div>
    )
}