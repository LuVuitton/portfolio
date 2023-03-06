import React from 'react';
import s from './App.module.scss';
import {Header} from '../Header/Header';
import {Main} from "../Main/Main";
import {Skills} from "../Skills/Skills";
import {MyProjects} from "../MyProjects/MyProjects";
import {Remote} from "../Remote/Remote";
import {Form} from "../Form/Form";
import {Footer} from "../Footer/Footer";

const App = () => {
    return (
        <div className={s.mainWrapper}>
            <Header/>
            <div className={s.content}>
                <Main/>
                <Skills/>
                <MyProjects/>
                <Remote/>
                <Form/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
