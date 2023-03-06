import React from "react";
import s from './OneSkill.module.scss'


export const OneSkill = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={s.icon}>icon</div>
            <h3 className={s.title}>REACT</h3>   {/*h3 сверху и снизу оставляет падинги*/}
            <p className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad dolorem explicabo, nesciunt nobis quos repudiandae suscipit! Animi aperiam commodi dolorum earum, ex excepturi facilis illo placeat quaerat ratione sed.</p>
        </div>
    )
}