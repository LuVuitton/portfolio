import React, {useEffect, useState} from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";


export const Main = () => {
    console.log('state')

    const string = 'front end developer'
    const arrText = Array.from(string)


    let [text, setText] = useState<string[]>([])
    let [switcher, setSwitcher] = useState<boolean>(false)
    let [timer, setTimer] = useState(true)


    useEffect(() => {
        const newArr: string[] = []
        let i = 0
        if (!switcher && timer) {
            const x = setInterval(() => {
                if (i < arrText.length) {
                    setText([...newArr, arrText[i]])
                    newArr.push(arrText[i])
                    i++
                } else {
                    clearInterval(x)
                    setSwitcher(true)
                }
            }, 200)
        }
    }, [switcher, timer])

    useEffect(() => {
        const newArr: string[] = text
        if (switcher && timer) {
            const x = setInterval(() => {
                if (newArr.length > 0) {
                    newArr.pop()
                    setText([...newArr])

                } else {
                    clearInterval(x)
                    setSwitcher(false)
                }
            }, 200)
        }
    }, [switcher, timer])


    return (
        <div className={s.mainWrapper}>
            <div className={`${s.container} ${sContainer.generalContainer}`}>
                <div className={s.content}>

                    <span>Hi, i'm</span>
                    <h1 className={s.title}>Felix Tekhada</h1>
                    <h3 className={s.text}>{text}</h3>
                    <ButtonGeneral type="button" title={'Get in Touch'} callback={() => {
                    }}/>
                    <button onClick={() => setTimer(false)}>OFF</button>
                    <button onClick={() => setTimer(true)}>ON</button>

                </div>
                {/*<div className={s.photo}>photo</div>*/}
            </div>
        </div>
    )
}