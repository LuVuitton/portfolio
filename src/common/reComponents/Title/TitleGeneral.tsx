import React from "react";
import s from './TitleGeneral.module.scss'

export type TitleGeneralType = {
    title: string
}

export const TitleGeneral = (props: TitleGeneralType) => {


    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    )
}