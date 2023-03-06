import React from "react";
import s from './Remote.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";
import {log} from "util";


export const Remote = () => {

    const remoteFun = ()=> console.log('remote')


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <h3 className={s.text}>looking into remote work options</h3>

                <ButtonGeneral type="button" title={'remote'} callback={remoteFun}/>

            </div>
        </div>
    )
}