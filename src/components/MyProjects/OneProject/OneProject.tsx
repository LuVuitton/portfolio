import React from "react";
import s from './OneProject.module.scss'
import {ButtonGeneral} from "../../../common/reComponents/ButtonGeneral/ButtonGeneral";



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


export const OneProject = (props: OneProjectPropsType) => {


    return (
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
    )
}