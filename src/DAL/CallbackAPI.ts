import axios from "axios"




export const callbackAPI = {

    sendDataForFeedback(data:any){
        return axios.post('http://localhost:3010/sendMessage', data)
            .then(()=> {
                console.log('successfully')
            })
    }
}