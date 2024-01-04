import axios from "axios"
import { BASE_URL, DELETE_SUBADMIN, GET_SUBADMIN, POST_SUBADMIN } from "../../constant"

// getsubadmin
export const Getsubadmin = () => {
    return axios.get(BASE_URL + GET_SUBADMIN).then((res) => {
        const data = res.data.data
        const status = res.status

        console.log(data);
        return {
            data, status
        }
    }).catch((e) => {
        console.log(e);
    })
}

//postsubadmin
export const Postsubadmin = (action) => {
    return axios.post(BASE_URL + POST_SUBADMIN, action.payload).then((res) => {
        const data = action.payload
        const status = res.status

        console.log(data);
        return {
            data, status
        }
    }).catch((e) => {
        console.log(e);
    })
}


//Deletesubadmin
export const Deletesubadmin = (action) => {
    console.log(action);
    return axios.delete(BASE_URL + DELETE_SUBADMIN + action.payload).then((res) => {
        const data = action.payload
        const status = res.status

        return {
            data, status
        }
    }).catch((e) => {
        console.log(e);
    })
}