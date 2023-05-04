import React from "react";
import { Link } from "react-scroll";
import s from './Nav.module.scss'

export const Nav = ()=> {
    return (
        <nav className={s.nav}>

            <a href="">Main</a>
            <a href="">Skill</a>
            {/*<a href="#projectsBlock">Projects</a>*/}
            <Link activeClass={s.active} //тут настраиваем стиль для активной ссылки
                  to="projectsBlock"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  // delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
            >
                Projects
            </Link>
            <a href="">Get in Touch</a>
        </nav>
    )
}