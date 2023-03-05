import React from "react";
import s from './OneProject.module.css'


export const OneProject = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={s.image}>
                <button className={s.lookButton}>look</button>
            </div>
            <h3 className={s.title}>SocialNetwork</h3>   {/*h3 сверху и снизу оставляет падинги*/}
            <span className={s.description}>is a website which alnnect with friends, work colleagues or people they don't know, online. It allows users to share pictures, music, videos, and articles, as well as their own thoughts and opinions with however many people they like.  </span>
           <div className={s.buttons}>
            <button>page</button>
            <button>code</button>
           </div>
        </div>
    )
}