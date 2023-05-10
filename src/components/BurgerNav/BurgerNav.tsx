import React from "react";
import s from './BurgerNav.module.scss'
import {BurgerBtn} from "./BurgerBtn/BurgerBtn";
import {NetworkIcons} from "../../common/reComponents/NetworkIcons/NetworkIcons";

export const BurgerNav = (props: any) => {


    return (
        <div className={s.mainWrapper}>
            <nav className={s.burgerNav}>
                <div onClick={props.showBurgerHandler} className={s.burgerButtonWrapper}>
                    <BurgerBtn isActive={props.showBurger}/>
                </div>

                <div className={props.showBurger ? `${s.items} ${s.show}` : s.items}>

                    {props.mappedLinks}


                    <div className={s.icons}>
                        <NetworkIcons/>
                    </div>
                </div>


            </nav>
        </div>
    )
}