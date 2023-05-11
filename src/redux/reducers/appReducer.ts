import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DispatchThunkType} from "../store";
import {callbackAPI} from "../../DAL/CallbackAPI";
import {runDefaultCatch} from "../../utilites/errors";

export type AppStateType = {
    appStatus: StatusType,
    errorMessage: AppErrorMessageType,
    isInitialized: boolean,
}
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed' // бездействующий|загружается|успешно|неуспешно
export type AppErrorMessageType = string | null


const initialAppState: AppStateType = {
    appStatus: "idle" as StatusType,
    errorMessage: null as AppErrorMessageType,
    isInitialized: false,
    //параметр что дождется ответа на ME что бы картинка не прыгала с логина на листы, сетаем тру, потом отображаем загрузку
}

const slice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        setAppStatus(state, action: PayloadAction<{ appStatus: StatusType }>) {
            state.appStatus = action.payload.appStatus
        },
        setErrorMessage(state, action: PayloadAction<{ errorMessage: AppErrorMessageType }>) {
            state.errorMessage = action.payload.errorMessage
        },
        setIsInitialized(state, action: PayloadAction<{ isInitialized: boolean }>) {
            state.isInitialized = action.payload.isInitialized
        }
    }
})



const sendContactData = createAsyncThunk<{ resetForm: boolean; }, FormikValuesType,  {
    // state: RootStateType,
    dispatch: DispatchThunkType,
    rejectValue: null, //написал нулл потому что в заглушке ошибки передаем null
}>
('app/sendContactData', async (payload, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    dispatch(appActions.setAppStatus({appStatus: 'loading'}))
    try {
        await callbackAPI.sendDataForFeedback(payload)
            dispatch(appActions.setAppStatus({appStatus: 'succeeded'}));
        return {resetForm: true} // вернул что бы подписаться зеном в сабмите формы
    } catch (err) {
        runDefaultCatch(dispatch,err)
        return rejectWithValue(null)
    }
    // finally {
    //     dispatch(appActions.setAppStatus({appStatus: 'idle'})) // статус устонавливается на нормальный в ерор скенбаре
    // }
})


export const appReducer = slice.reducer
export const appActions = slice.actions
export const appThunk = {sendContactData}


export type FormikValuesType = {
    email: string
    message: string
    name: string
    company: string
    otherContacts: string
}


