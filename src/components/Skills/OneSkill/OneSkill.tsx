import React, {useState} from "react";
import {Fade} from "react-awesome-reveal";
import s from './OneSkill.module.scss'


export const OneSkill = (props:OneSkillPropsType) => {

    const [visible, setVisible] = useState(false)

    const onVisibilityChangeHandler = (inView: boolean, entry: IntersectionObserverEntry) => {
        if (inView && !visible) {
            setVisible(true);
        }
    }


    return (
        <Fade direction={"down"} triggerOnce={true} duration={1000} delay={100}
              onVisibilityChange={onVisibilityChangeHandler}>
            <div className={s.mainWrapper} style={{opacity: visible ? 1 : 0, transition: 'opacity 0.5s'}}>


                <div className={s.iconWrapper}>
                    <img className={`${s.icon}`} src={props.skillImg} alt="LinkedIn"/>
                </div>


                <h3 className={s.title}>{props.skillTitle}</h3>   {/*h3 сверху и снизу оставляет падинги*/}
                <p className={s.description}>{props.skillDescription}</p>
            </div>

        </Fade>
    )
}


type OneSkillPropsType = {
    skillImg:string,
    skillTitle:string,
    skillDescription:string
}