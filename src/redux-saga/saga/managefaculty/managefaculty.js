import { call, put } from "redux-saga/effects"
import { Deletefaculty, Getfaculty, Postfaculty, updatefaculty } from "../../faculty/api/api"
import { DELETE_FACULTY_ERROR, DELETE_FACULTY_SUCCESS, GET_FACULTY_LIST_ERROR, GET_FACULTY_LIST_SUCCESS, POST_FACULTY_ERROR, POST_FACULTY_SUCCESS, UPDATE_FACULTY_ERROR, UPDATE_FACULTY_SUCCESS } from "../../faculty/action/action"
import swal from "sweetalert"

//get faculty
export function* handleGetfaculty(action) {
    try {
        const res = yield call(Getfaculty, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            yield put({ type: GET_FACULTY_LIST_SUCCESS, data })

        } else {
            yield put({ type: GET_FACULTY_LIST_ERROR, data })
        }
    } catch (e) {
        yield put({ type: GET_FACULTY_LIST_ERROR, e })
    }
}

//Postfaculty
export function* handlePostfaculty(action) {
    try {
        const res = yield call(Postfaculty, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            swal("Faculty Successfully Added!", "Good job!", "success")
            yield put({ type: POST_FACULTY_SUCCESS, data })
        } else {
            yield put({ type: POST_FACULTY_ERROR, data })
        }
    } catch (e) {
        swal("Something Went Wrong","error!", "error")
        yield put({ type: POST_FACULTY_ERROR, e })
    }
}

//deletefaculty
export function* handleDeletefaculty(action) {
    try {
        const res = yield call(Deletefaculty, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            swal("Faculty Successfully Deleted!", "Good job!", "success")
            yield put({ type: DELETE_FACULTY_SUCCESS, data })
        } else {
            yield put({ type: DELETE_FACULTY_ERROR, data })
        }
    } catch (e) {
        swal("Something Went Wrong","error!", "error")
        yield put({ type: DELETE_FACULTY_ERROR, e })
    }
}


// update
export function* handleUpdatefaculty(action) {
    try {
        const res = yield call(updatefaculty, action);
        const status = res.status;
        console.log(action, " this is post status");
        const data = res.data;
        if (status === 200 || status === 201) {
            swal("Faculty Successfully Updated!", "Good job!", "success")
            yield put({ type: UPDATE_FACULTY_SUCCESS, data });
        } else {
            yield put({ type: UPDATE_FACULTY_ERROR, data });
        }
    } catch (e) {
        yield put({ type: UPDATE_FACULTY_ERROR, e });
    }
}