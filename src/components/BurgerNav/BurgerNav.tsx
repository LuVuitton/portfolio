import React from "react";
import s from './BurgerNav.module.scss'
import {BurgerBtn} from "./BurgerBtn/BurgerBtn";

export const BurgerNav = (props: any) => {


    return (
        <div className={s.mainWrapper}>
            <nav className={s.burgerNav}>
                     {/*<div onClick={props.showBurgerHandler} className={props.showBurger? `${s.burgerButton} ${s.burgerButtonShow}`:s.burgerButton}></div>*/}
                <div onClick={props.showBurgerHandler} className={s.burgerButtonWrapper}>
                    <BurgerBtn isActive={props.showBurger}/>
                </div>

                     <div className={props.showBurger?`${s.items} ${s.show}`:s.items}>{props.mappedLinks}</div>
            </nav>
        </div>
    )
}