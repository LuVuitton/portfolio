import React from "react";
import {Nav} from "../Nav/Nav";
import s from './Header.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {BurgerNav} from "../BurgerNav/BurgerNav";
import {Link} from "react-scroll";

type HeaderPropsType = {
    hideBurgerHandler: ()=> void
    showBurgerHandler: ()=> void
    showBurger:boolean
}
export const Header = (props:HeaderPropsType) => {


    const links: string[] = ['main', 'skills', 'projects', 'get in touch']



    const mappedLinks = links.map((e, i) => {
        // debugger
        return <Link
            key={i}
            activeClass={s.active} //тут настраиваем стиль для активной ссылки
            to={e}
            spy={true}
            smooth={true}
            // hashSpy={true}
            offset={e === 'get in touch' ? -90 : 50}
            duration={500}
            // delay={1000}
            // isDynamic={true}
            // ignoreCancelEvents={false}
            // spyThrottle={500}
            onClick={props.hideBurgerHandler}
        >
            {e}
        </Link>
    })

    return (
        <div className={s.mainWrapper}>
            <BurgerNav
                mappedLinks={mappedLinks}
                showBurger={props.showBurger}
                showBurgerHandler={props.showBurgerHandler}
            />
            <div className={`${s.container} ${sContainer.generalContainer}`}>
                <header className={s.header}>

                    <Nav mappedLinks={mappedLinks}/>

                </header>
            </div>
        </div>
    )
}