import React from "react";
import s from './Remote.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";
import {Link} from "react-scroll";


export const Remote = () => {

    const remoteHandler = ()=> {}


    return (
        <div className={s.mainWrapper}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <h3 className={s.text}>looking into remote work options</h3>

                <Link
                    to={'get in touch'}
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                >
                    <ButtonGeneral type="button" title={'remote'} callback={remoteHandler}/>
                </Link>

            </div>
        </div>
    )
}

