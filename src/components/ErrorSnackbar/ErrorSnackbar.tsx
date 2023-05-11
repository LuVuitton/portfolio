import React from 'react'
import Snackbar from '@mui/material/Snackbar/Snackbar'
import MuiAlert, {AlertProps} from '@mui/material/Alert/Alert'
import {useDispatch, useSelector} from "react-redux";
import {appActions} from '../../redux/reducers/appReducer';
import {RootStateType} from "../../redux/store";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})


export function ErrorSnackbar() {
    const globalEntityStatus = useSelector((state: RootStateType) => state.app.appStatus)
    // const globalEntityStatus = 'succeeded' as StatusType
    const errorMessage = useSelector((state: RootStateType) => state.app.errorMessage)
    const dispatch = useDispatch()
    // const [open, setOpen] = useState(true)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        dispatch(appActions.setAppStatus({appStatus: "idle"}))

        setTimeout(() => {
            dispatch(appActions.setErrorMessage({errorMessage: null}))
        }, 1000)
    }





    return (
        <Snackbar open={globalEntityStatus === 'failed' || globalEntityStatus === 'succeeded'} autoHideDuration={4000}
                  onClose={handleClose}>
            <Alert onClose={handleClose} severity={globalEntityStatus === 'failed' ? 'error' : 'success'} sx={{width: '100%'}}>
                {globalEntityStatus === 'failed'
                    ? `${errorMessage} 😐`
                    : 'Succeeded'
                }


            </Alert>
        </Snackbar>
    )
}