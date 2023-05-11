import React from "react";
import s from './NetworkIcons.module.scss'
import sContainer from '../../styles/GeneralContainer.module.scss'
import gitImg from '../../../other/icons/git.png'
import linkedInImg from '../../../other/icons/linkedin.png'
import telegram from '../../../other/icons/telegram.png'


export const NetworkIcons = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>


                <div className={s.iconsBlock}>
                    <div className={s.iconWrapper}>
                        <a href="https://github.com/LuVuitton" target={'_blank'}>
                            <img className={`${s.icon} ${s.git}`} src={gitImg} alt="GitHub"/>
                        </a>
                    </div>
                    <div className={s.iconWrapper}>
                        <a href="https://www.linkedin.com/in/felix-tekhada-3b6b16249" target={'_blank'}>
                            <img className={`${s.icon} ${s.linkedin}`} src={linkedInImg} alt="LinkedIn"/>
                        </a>
                    </div>
                    {/*<div className={s.iconWrapper}>*/}
                    {/*    <a href="https://t.me/timmyturnerrr" target={'_blank'}>*/}
                    {/*        <img className={`${s.icon} ${s.facebook}`} src={facebook} alt="Facebook"/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}

                    <div className={s.iconWrapper}>
                        <a href="https://t.me/timmyturnerrr" target={'_blank'}>
                            <img className={`${s.icon} ${s.telegram}`} src={telegram} alt="Telegram"/>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}

