import {Dispatch} from "redux";
import axios, {AxiosError} from "axios";
import {appActions} from "../redux/reducers/appReducer";


export const runDefaultCatch = (dispatch: Dispatch, err: unknown) => {
    const error = err as Error | AxiosError<{ message: string }>
    if (axios.isAxiosError(error)) {
        const errMessage = error.message ? error.message : 'some error has occurred'
        dispatch(appActions.setErrorMessage({errorMessage: errMessage}))
    } else {
        dispatch(appActions.setErrorMessage({errorMessage: `Native Error ${error.message}`}))
    }
    dispatch(appActions.setAppStatus({appStatus: 'failed'}))
}