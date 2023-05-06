import React, {useState} from "react";
import {Fade} from "react-awesome-reveal";
import s from './OneSkill.module.scss'


export const OneSkill = () => {

    const [visible, setVisible] = useState(false)

    const onVisibilityChangeHandler = (inView: boolean, entry: IntersectionObserverEntry) => {
        if (inView && !visible) {
            setVisible(true);
        }
    }


    return (
        <Fade direction={"down"} triggerOnce={true} duration={1000} delay={100} onVisibilityChange={onVisibilityChangeHandler}>
                <div className={s.mainWrapper} style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s' }}>
                    <div className={s.icon}>icon</div>
                    <h3 className={s.title}>REACT</h3>   {/*h3 сверху и снизу оставляет падинги*/}
                    <p className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad dolorem
                        explicabo, nesciunt nobis quos repudiandae suscipit! Animi aperiam commodi dolorum earum, ex
                        excepturi facilis illo placeat quaerat ratione sed.</p>
                </div>

        </Fade>
    )
}