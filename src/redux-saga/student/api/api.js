import axios from "axios"
import { BASE_URL, DELETE_STUDENT, GET_STUDENT, POST_STUDENT } from "../../constant"

// getsubadmin
export const Getstudent = () => {
    return axios.get(BASE_URL + GET_STUDENT).then((res) => {
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
export const Poststudent = (action) => {
    console.log(action);
    return axios.post(BASE_URL + POST_STUDENT, action.payload).then((res) => {
        const data = action.payload
        const status = res.status

        return {
            data, status
        }
    }).catch((e) => {
        console.log(e);
    })
}

//Deletesubadmin
export const Deletestudent = (action) => {
    return axios.delete(BASE_URL + DELETE_STUDENT + action.payload).then((res) => {
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