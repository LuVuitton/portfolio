import React, {useState} from 'react';
import s from './App.module.scss';
import {Header} from '../Header/Header';
import {Main} from "../Main/Main";
import {Skills} from "../Skills/Skills";
import {MyProjects} from "../MyProjects/MyProjects";
import {Remote} from "../Remote/Remote";
import {Form} from "../Form/Form";
import {Footer} from "../Footer/Footer";
import {ErrorSnackbar} from "../ErrorSnackbar/ErrorSnackbar";
import {AdditionalSkills} from "../AdditionalSkills/AdditionalSkills";

const App = () => {
    // console.log('app')
    const [showBurger, setShowBurger] = useState(false)


    const showBurgerHandler = () => {
        setShowBurger(true)
    }
    const hideBurgerHandler = () => {
        showBurger && setShowBurger(false)
    }


    return (
        <div className={s.mainWrapper} onClick={hideBurgerHandler}>
            <Header showBurger={showBurger} showBurgerHandler={showBurgerHandler}
                    hideBurgerHandler={hideBurgerHandler}/>
            <div className={s.content}>

                <Main/>
                <MyProjects/>
                <Remote/>
                <Skills/>
                <AdditionalSkills/>
                <Form/>

            </div>
            <Footer/>
            <ErrorSnackbar/>
        </div>
    );
}

export default App;
