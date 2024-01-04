import { call, put } from "redux-saga/effects"
import { Deletestudent, Getstudent, Poststudent } from "../../student/api/api"
import { DELETE_STUDENT_ERROR, DELETE_STUDENT_SUCCESS, GET_STUDENT_LIST_ERROR, GET_STUDENT_LIST_SUCCESS, POST_STUDENT_ERROR, POST_STUDENT_SUCCESS } from "../../student/action/action"
import swal from "sweetalert"

//get student
export function* handleGetstudent(action) {
    try {
        const res = yield call(Getstudent, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            yield put({ type: GET_STUDENT_LIST_SUCCESS, data })
        } else {
            yield put({ type: GET_STUDENT_LIST_ERROR, data })
        }
    } catch (e) {
        yield put({ type: GET_STUDENT_LIST_ERROR, e })
    }
}

//Post student
export function* handlePoststudent(action) {
    try {
        const res = yield call(Poststudent, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            swal("Student Successfully Added!", "Good job!", "success")
            yield put({ type: POST_STUDENT_SUCCESS, data })
        } else {
            yield put({ type: POST_STUDENT_ERROR, data })
        }
    } catch (e) {
        swal("Something Went Wrong","error!", "error")
        yield put({ type: POST_STUDENT_ERROR, e })
    }
}

//delete student
export function* handleDeletestudent(action) {
    try {
        const res = yield call(Deletestudent, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            swal("Student Successfully Deleted!", "Good job!", "success")
            yield put({ type: DELETE_STUDENT_SUCCESS, data })
        } else {
            yield put({ type: DELETE_STUDENT_ERROR, data })
        }
    } catch (e) {
        swal("Something Went Wrong","error!", "error")
        yield put({ type: DELETE_STUDENT_ERROR, e })
    }
}