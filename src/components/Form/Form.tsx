import React, {useState} from "react";
import s from './Form.module.scss'
import sContainer from '../../common/styles/GeneralContainer.module.scss'
import {TitleGeneral} from "../../common/reComponents/Title/TitleGeneral";
import {ButtonGeneral} from "../../common/reComponents/ButtonGeneral/ButtonGeneral";
import {Fade} from "react-awesome-reveal";
import {useFormik} from "formik";
import {appThunk, FormikValuesType} from "../../redux/reducers/appReducer";
import {RootStateType, useCustomThunkDispatch} from "../../redux/store";
import {useSelector} from "react-redux";

export type BtnStatus = 'normal'|'loading'

export const Form = () => {
    const [visible, setVisible] = useState(false)
    const onVisibilityChangeHandler = (inView: boolean, entry: IntersectionObserverEntry) => {
        if (inView && !visible) {
            setVisible(true);
        }
    }

    // const [btnStatus, setBtnStatus] = useState<BtnStatus>('normal')
    const dispatch = useCustomThunkDispatch()
    const appStatus = useSelector((state:RootStateType)=> state.app.appStatus)


    const formik = useFormik({
        initialValues: {
            name:'',
            company: '',
            email: '',
            message: '',
            otherContacts: ''
        },

        validate: (values) => {
            const errors: FormikErrorType = {}
            // debugger
            if (!values.email && !Object.keys(formik.touched).includes('email')) {
                errors.email = 'email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: (values: FormikValuesType) => {
            // callbackAPI.sendDataForFeedback(values)
          dispatch(appThunk.sendContactData(values))
              .then(r=> {
                  r.payload?.resetForm && formik.resetForm()
              })
        },
    })


    return (
        <div className={s.mainWrapper} id={'get in touch'}>
            <div className={`${sContainer.generalContainer} ${s.container}`}>

                <form onSubmit={formik.handleSubmit} className={s.formContainer}>
                    <TitleGeneral title={'contacts'}/>

                    <input className={s.formInput} type="text" {...formik.getFieldProps('name')} placeholder="name"/>

                    <input className={s.formInput} type="text" {...formik.getFieldProps('company')} placeholder="company"/>

                    <input   {...formik.getFieldProps('email')} className={s.formInput} type="email"
                             placeholder="email"/>
                    {formik.touched.email && formik.errors.email ?
                        <div style={{color: "red", fontSize: '10px'}}>{formik.errors.email}</div> : null}

                    <input   {...formik.getFieldProps('otherContacts')} className={s.formInput} type="text"
                             placeholder="other contacts"/>

                    <textarea {...formik.getFieldProps('message')} className={s.formTextArea} placeholder="message"/>





                    <Fade triggerOnce={true} direction={'down'} delay={100}
                          onVisibilityChange={onVisibilityChangeHandler}>
                        <ButtonGeneral status={appStatus} type="submit" title={'get in touch'} callback={() => {
                        }} style={{opacity: visible ? 1 : 0, transition: 'opacity 0.5s',width: '172px', height: '50px' }}/>
                    </Fade>

                </form>
            </div>
        </div>
    )
}


type FormikErrorType = {
    email?: string
    password?: string
}


