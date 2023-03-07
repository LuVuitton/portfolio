import React, {useEffect, useState} from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";


export const Main = () => {

    const string = 'front end developer'
    const arrText = Array.from(string)


    let [text, setText] = useState<string[]>([])
    let [switcher, setSwitcher] = useState<boolean>(false)
    let [timer, setTimer] = useState(false)


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
<div>
                    <button onClick={() => setTimer(false)}>OFF writing</button>
                    <button onClick={() => setTimer(true)}>ON writing</button>
</div>
                    впечатывание пока что через кнопку, будет через хук, но пока через кнопку)

                </div>
                {/*<div className={s.photo}>photo</div>*/}
            </div>
        </div>
    )
}