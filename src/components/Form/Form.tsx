import React from "react";
import s from './Form.module.css'
import sContainer from '../../common/styles/GeneralContainer.module.css'


export const Form = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>


                <form action="#">
                    <h3 className={s.title}>contacts</h3>
                    <input className={s.formInput} type="text" name="name" value="name"/>
                    <input className={s.formInput} type="text" name="company" value="company"/>
                    <input className={s.formInput} type="text" name="link" value="link for feedback"/>
                    <textarea className={s.formTextArea} name="message"/>
                    <input className={s.button} type="submit"/>
                </form>


            </div>
        </div>
    )
}