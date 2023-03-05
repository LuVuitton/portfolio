import React from "react";
import s from './OneProject.module.css'


export const OneProject = () => {


    return (
        <div className={s.mainWrapper}>
            <div className={s.image}>
                <button className={s.lookButton}>look</button>
            </div>
            <h3 className={s.title}>SocialNetwork</h3>   {/*h3 сверху и снизу оставляет падинги*/}
            <p className={s.description}>
                With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
           <div className={s.buttons}>
            <button>page</button>
            <button>code</button>
           </div>
        </div>
    )
}