import React from "react";
import s from './Footer.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {NetworkIcons} from "../../common/reComponents/NetworkIcons/NetworkIcons";


export const Footer = () => {


    return (
        <footer className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                {/*<h3 className={s.text}>Felix Tekhada</h3>*/}
                <NetworkIcons/>
                <p>2013</p>

            </div>
        </footer>
    )
}

