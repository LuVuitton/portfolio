import React, {useState} from "react";
import s from './Form.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";
import {Fade} from "react-awesome-reveal";


export const Form = () => {
    console.log('finally')
    const formFun = () => console.log('hi')

    const [visible, setVisible] = useState(false)

    const onVisibilityChangeHandler = (inView: boolean, entry: IntersectionObserverEntry) => {
        if (inView && !visible) {
            setVisible(true);
            console.log('onVisibilityChangeHandler')
        }
    }


    return (
        <div className={s.mainWrapper} id={'get in touch'}>
        {/*<div className={s.mainWrapper}>*/}
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <form action="#" className={s.formContainer}>
                    <TitleGeneral title={'contacts'}/>
                    <input className={s.formInput} type="text" name="name" placeholder="name"/>
                    <input className={s.formInput} type="text" name="company" placeholder="company"/>
                    <input className={s.formInput} type="text" name="link" placeholder="link for feedback"/>
                    <textarea className={s.formTextArea} name="message" placeholder="message"/>
                    <Fade triggerOnce={true} direction={'down'} delay={100} onVisibilityChange={onVisibilityChangeHandler} >
                        <ButtonGeneral type="submit" title={'form'} callback={formFun} style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s' }}/>
                    </Fade>

                </form>


            </div>
        </div>
    )
}