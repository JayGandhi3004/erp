import axios from "axios"
import { BASE_URL, DELETE_FACULTY, GET_FACULTY, POST_FACULTY, UPDATE_FACULTY } from "../../constant"

// getfaculty
export const Getfaculty = () => {
    return axios.get(BASE_URL + GET_FACULTY).then((res) => {
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

//postfaculty
export const Postfaculty = (action) => {
    return axios.post(BASE_URL + POST_FACULTY, action.payload).then((res) => {
        const data = res.data.data.faculty
        const status = res.status

        console.log(data);
        return {
            data, status
        }
    }).catch((e) => {
        console.log(e);
    })
}

// delete 
export const Deletefaculty = (action) => {
    console.log(action, "action");
    return axios.delete(BASE_URL + DELETE_FACULTY + action.payload).then((res) => {

        const data = action.payload;
        const status = res.status

        return {
            data,
            status,
        }
    })
        .catch((err) => console.log(err));
};


// update 
export const updatefaculty = (action) => {
    console.log(action, "api action");
    
    return axios.put(BASE_URL+UPDATE_FACULTY+action.payload._id, action.payload).then((res) => {

        const data = action.payload;
        const status = res.status

        return {
            data,
            status,
        }
    })
        .catch((err) => console.log(err));
};