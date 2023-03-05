import React from "react";
import s from './OneProject.module.scss'

export type OneProjectPropsType = {
    projectName: string
    description: string
    style:{
        backgroundImage:string
    }

}


export const OneProject = (props: OneProjectPropsType) => {


    return (
        <div className={s.mainWrapper}>
            <div className={s.image} style={props.style}>
                <button className={s.lookButton}>look</button>
            </div>
            <h3 className={s.title}>{props.projectName}</h3>   {/*h3 сверху и снизу оставляет падинги*/}
            <p className={s.description}>{props.description}</p>
            <div className={s.buttons}>
                <button>page</button>
                <button>code</button>
            </div>
        </div>
    )
}