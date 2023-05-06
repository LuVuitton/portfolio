import React from "react";
import s from './BurgerNav.module.scss'

export const BurgerNav = (props: any) => {


    return (
        <div className={s.mainWrapper}>
            <nav className={s.burgerNav}>
                     {/*<div onClick={props.showBurgerHandler} className={props.showBurger? `${s.burgerButton} ${s.burgerButtonShow}`:s.burgerButton}></div>*/}
                <div onClick={props.showBurgerHandler} className={`${s.burgerButton} ${props.showBurger ? s.burgerButtonShow : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                     <div className={props.showBurger?`${s.items} ${s.show}`:s.items}>{props.mappedLinks}</div>
            </nav>
        </div>
    )
}