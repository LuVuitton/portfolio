import React from "react";
import s from './ButtonGeneral.module.scss'

export type ButtonGeneralPropsType = {
    type: "button" | "submit" | "reset" | undefined
    title: string
    callback: () => void
}

export const ButtonGeneral = (props: ButtonGeneralPropsType) => {
    return (
        <button
            type={props.type}
            onClick={() => props.callback()}
            className={s.generalButton}
        >
            {props.title}
        </button>
    )
}
