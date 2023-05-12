import React, {useState} from "react";
import s from './OneProject.module.scss'
import {ButtonGeneral} from "../../../common/reComponents/ButtonGeneral/ButtonGeneral";
import {Slide} from "react-awesome-reveal";
import {Tilt} from "react-tilt";


export const OneProject = (props: OneProjectPropsType) => {

    const [visible, setVisible] = useState(false)

    const onVisibilityChangeHandler = (inView: boolean, entry: IntersectionObserverEntry) => {
        if (inView && !visible) {
            setVisible(true);
        }
    }


    return (
        <Slide triggerOnce={true} delay={100} onVisibilityChange={onVisibilityChangeHandler}>


            <div className={s.mainWrapper}>
                <div className={s.imgBlock}>
                <Tilt options={defaultOptions}
                      style={{opacity: visible ? 1 : 0, transition: 'opacity 0.5s', minWidth: '300px',
                          maxWidth: '40%'}}>
                    <div className={s.image} style={props.bgImg}>
                        <ButtonGeneral style={props.lookBtnStyle} type="button" title={'TRY'} callback={() => {
                        }}/>
                    </div>
                </Tilt>
                </div>


                <div className={s.textBlock}>
                    <h3 className={s.title}>{props.projectName}</h3>   {/*h3 сверху и снизу оставляет падинги*/}
                    <p className={s.description}>{props.description}</p>
                    <div className={s.buttons}>
                        {/*<a href={props.gitPagesURL} target={'_blank'}>*/}
                        {/*    <ButtonGeneral style={props.btnStyle} type="button" title={'page'} callback={() => {*/}
                        {/*    }}/>*/}
                        {/*</a>*/}
                        <a href={props.gitRepositoryURL} target={'_blank'} rel="noopener noreferrer">
                            <ButtonGeneral style={props.btnStyle} type="button" title={'GIT code'} callback={() => {
                            }}/>
                        </a>
                    </div>
                </div>
            </div>


        </Slide>
    )
}


export type OneProjectPropsType = {
    projectName: string
    description: string
    bgImg: { backgroundImage: string }
    btnStyle: { padding: string }
    lookBtnStyle: { zIndex: string, }
    gitRepositoryURL: string,
    gitPagesURL: string
}
const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 5,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.

}
