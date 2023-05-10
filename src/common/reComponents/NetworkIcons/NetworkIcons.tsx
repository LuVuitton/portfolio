import React from "react";
import s from './NetworkIcons.module.scss'
import sContainer from '../../styles/GeneralContainer.module.scss'
import gitImg from '../../../other/icons/git.png'
import linkedInImg from '../../../other/icons/linkedin.png'
import facebook from '../../../other/icons/facebook.png'
import telegram from '../../../other/icons/telegram.png'


export const NetworkIcons = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>



                <div className={s.iconsBlock}>
                    <div className={s.iconWrapper}><img className={`${s.icon} ${s.git}`} src={gitImg} alt="GitHub"/></div>
                    <div className={s.iconWrapper}><img  className={`${s.icon} ${s.linkedin}`}  src={linkedInImg} alt="LinkedIn"/></div>
                    <div className={s.iconWrapper}><img  className={`${s.icon} ${s.facebook}`}  src={facebook} alt="Facebook"/></div>
                    <div className={s.iconWrapper}><img  className={`${s.icon} ${s.telegram}`}  src={telegram} alt="Telegram"/></div>
                </div>



            </div>
        </div>
    )
}

