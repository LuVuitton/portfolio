import React, {useCallback, useEffect, useState} from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";


export const Main = () => {
    console.log('main')
    const string = 'front end developer'
    const arrText = Array.from(string)
    const displayHeight = document.documentElement.clientHeight

    const [text, setText] = useState<string[]>([]) //текст
    const [switcher, setSwitcher] = useState(false) //переключатель направления впечатывания
    const [timer, setTimer] = useState(false) // переключатель впечанывания
    const [inProcess, setInProcess] = useState(false) // отслеживаем в процессе ли впечатывание

    useEffect(() => {
        if (window.scrollY < displayHeight) {
            setTimer(true)
        }
    }, [])
    useEffect(() => {

        const newArr: string[] = []
        let i = 0
        if (!switcher && timer && !inProcess) {
            setInProcess(true)
            const x = setInterval(() => {
                if (i < arrText.length) {
                    setText([...newArr, arrText[i]])
                    newArr.push(arrText[i])
                    i++
                } else {
                    clearInterval(x)
                    setSwitcher(true)
                    setInProcess(false)
                }
            }, 200)
        }
    }, [switcher, timer])
    useEffect(() => {
        const newArr: string[] = text
        if (switcher && timer && !inProcess) {
            setInProcess(true)
            const x = setInterval(() => {
                if (newArr.length > 0) {
                    newArr.pop()
                    setText([...newArr])

                } else {
                    clearInterval(x)
                    setSwitcher(false)
                    setInProcess(false)
                }
            }, 200)
        }
    }, [switcher, timer])
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleScroll = () => {
        const scrollValue = window.scrollY
        if (scrollValue < displayHeight) {
            console.log('turn on')
            setTimer(true)
        }
        if (scrollValue > displayHeight && scrollValue < displayHeight + 100) {
            console.log('turn off')
            setTimer(false)
        }


    };

    const buttonHandler = useCallback(() => {
        console.log('buttonHandler')
    }, [])


    return (
        <div className={s.mainWrapper}>
            <div className={`${s.container} ${sContainer.generalContainer}`}>
                <div className={s.content}>

                    <span>Hi, i'm</span>
                    <h1 className={s.title}>Felix Tekhada</h1>
                    <h3 className={s.text}>{text}</h3>
                    <ButtonGeneral type="button" title={'Get in Touch'} callback={buttonHandler}/>


                </div>
                {/*<div className={s.photo}>photo</div>*/}
            </div>
        </div>
    )
}