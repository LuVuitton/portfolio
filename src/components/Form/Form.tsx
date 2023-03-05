import React from "react";
import s from './Form.module.css'
import sContainer from '../../common/styles/GeneralContainer.module.css'
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";


export const Form = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>


                <form action="#" className={s.formContainer}>
                    <TitleGeneral title={'contacts'}/>
                    <input className={s.formInput} type="text" name="name" value="name"/>
                    <input className={s.formInput} type="text" name="company" value="company"/>
                    <input className={s.formInput} type="text" name="link" value="link for feedback"/>
                    <textarea className={s.formTextArea} name="message"/>
                    <button className={s.button} type="submit">button</button>
                </form>


            </div>
        </div>
    )
}