import {combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {appReducer} from "./reducers/appReducer";
import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


const rootReducer = combineReducers({// сюда возврщается стейт из редьюсеров и на этот обьект(или ключи или шо) подписан юз селектор
    app: appReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})

export type RootStateType = ReturnType<typeof store.getState>




// кастомный хук для юзДиспатч, теперь он опять может принимать санки а не только объекты
// export type DispatchThunkType = ThunkDispatch<RootStateType, any, GeneralACType>
export type DispatchThunkType = ThunkDispatch<RootStateType, any, AnyAction>
export const useCustomThunkDispatch = () => useDispatch<DispatchThunkType>()



// @ts-ignore
window.store = store

