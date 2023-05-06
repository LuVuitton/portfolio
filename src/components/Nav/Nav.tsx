import React from "react";
import s from './Nav.module.scss'

export const Nav = (props:any) => {



    return (
        <nav className={s.nav}>
            {props.mappedLinks}
        </nav>
    )
}


export type NavPropsType = {
    mappedLinks: React.Component<any>
}