import React from "react";
import s from './ButtonGeneral.module.scss'
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import {StatusType} from "../../../redux/reducers/appReducer";

export type ButtonGeneralPropsType = {
    type: "button" | "submit" | "reset" | undefined
    title: string
    callback: () => void
    style?: any
    status?: StatusType
}

export const ButtonGeneral = React.memo((props: ButtonGeneralPropsType) => {
    // console.log('button general')
    return (
        <button
            type={props.type}
            onClick={() => props.callback()}
            className={s.generalButton}
            style={props.style}
        >

                {props.status === 'loading'
                    ? <CircularProgress color="inherit" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                    : props.title}
        </button>
    )
})
