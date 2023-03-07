import React from "react";
import s from './ButtonGeneral.module.scss'

export type ButtonGeneralPropsType = {
    type: "button" | "submit" | "reset" | undefined
    title: string
    callback: () => void
    style?: any
}

export const ButtonGeneral = (props: ButtonGeneralPropsType) => {
    console.log(props)
    return (
        <button
            type={props.type}
            onClick={() => props.callback()}
            className={s.generalButton}
            style={props.style}
        >
            {props.title}
        </button>
    )
}
