import React from "react";
import s from './OneProject.module.scss'
import {ButtonGeneral} from "../../../common/reComponents/ButtonGeneral/ButtonGeneral";
import { Slide } from "react-awesome-reveal";
import { Tilt } from "react-tilt";



export type OneProjectPropsType = {
    projectName: string
    description: string
    bgImg: {
        backgroundImage: string
    }
    btnStyle: {
        padding: string
    }
    lookBtnStyle: {
        zIndex: string,
    }
}
const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            5,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.

}


export const OneProject = (props: OneProjectPropsType) => {
    return (
        <Slide triggerOnce={true} delay={100}>
            <Tilt options={defaultOptions}>
        <div className={s.mainWrapper}>
            <div className={s.image} style={props.bgImg}>
                <ButtonGeneral style={props.lookBtnStyle} type="button" title={'look'} callback={() => {}}/>
            </div>
            <h3 className={s.title}>{props.projectName}</h3>   {/*h3 сверху и снизу оставляет падинги*/}
            <p className={s.description}>{props.description}</p>
            <div className={s.buttons}>
                <ButtonGeneral style={props.btnStyle} type="button" title={'page'} callback={() => {
                }}/>
                <ButtonGeneral style={props.btnStyle} type="button" title={'code'} callback={() => {
                }}/>
            </div>
        </div>
            </Tilt>
            </Slide>
    )
}