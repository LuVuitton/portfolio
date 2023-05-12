import axios from "axios"




export const callbackAPI = {

    sendDataForFeedback(data:any){
        return axios.post('https://portfolio-back-6xiy-git-main-luvuitton.vercel.app/sendMessage', data)
    }
}




