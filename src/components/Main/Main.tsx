import React, {useCallback, useEffect, useState} from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";
import {Flip} from "react-awesome-reveal";
import {Link} from "react-scroll";


export const Main = () => {

    const string = 'react developer'
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
    }, [displayHeight])
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
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


    const handleScroll = () => {
        const scrollValue = window.scrollY
        if (scrollValue < displayHeight) {
            // console.log('text on')
            setTimer(true)
        }
        if (scrollValue > displayHeight && scrollValue < displayHeight + 100) {
            // console.log('text off')
            setTimer(false)
        }


    };

    const buttonHandler = useCallback(() => {
    }, [])


    return (
        <div className={s.mainWrapper} id={'main'}>
            <div className={`${s.container} ${sContainer.generalContainer}`}>
                {/*<Particles className={s.particles} params={particlesOpt} />*/}

                <div className={s.content}>

                    <span>Hi, i'm</span>

                    <h1 className={s.title}>Felix Tekhada</h1>
                    <h3 className={s.text}> {'>'} {text}</h3>
                    <Flip direction={'horizontal'} triggerOnce={true} delay={200}>
                        <Link
                            to={'get in touch'}
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                        >
                            <ButtonGeneral type="button" title={'Get in Touch'} callback={buttonHandler}/>
                        </Link>

                    </Flip>

                </div>
                {/*<div className={s.photo}>photo</div>*/}
            </div>
        </div>
    )
}