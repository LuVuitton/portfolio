import React from "react";
import s from './Form.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";


export const Form = () => {
const formFun = ()=>console.log('hi')

    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <form action="#" className={s.formContainer}>
                    <TitleGeneral title={'contacts'}/>
                    <input className={s.formInput} type="text" name="name" value="name"/>
                    <input className={s.formInput} type="text" name="company" value="company"/>
                    <input className={s.formInput} type="text" name="link" value="link for feedback"/>
                    <textarea className={s.formTextArea} name="message"/>
                    <ButtonGeneral type="submit" title={'form'} callback={formFun}/>
                </form>


            </div>
        </div>
    )
}