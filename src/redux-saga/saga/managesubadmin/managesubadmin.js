import swal from "sweetalert";
import { DELETE_SUBMIN_ERROR, DELETE_SUBMIN_SUCCESS, GET_SUBMIN_LIST_ERROR, GET_SUBMIN_LIST_SUCCESS, POST_SUBMIN_ERROR, POST_SUBMIN_SUCCESS } from "../../subadmin/action/action";
import { Deletesubadmin, Getsubadmin, Postsubadmin } from "../../subadmin/api/api";
import { call, put } from "redux-saga/effects"

//getsubadmin
export function* handleGetsubadmin(action) {
    try {
        const res = yield call(Getsubadmin, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            yield put({ type: GET_SUBMIN_LIST_SUCCESS, data })
        } else {
            yield put({ type: GET_SUBMIN_LIST_ERROR, data })
        }
    } catch (e) {
        yield put({ type: GET_SUBMIN_LIST_ERROR, e })
    }
}

//Postsubadmin
export function* handlePostsubadmin(action) {
    try {
        const res = yield call(Postsubadmin, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            swal("Subadmin Successfully Added!", "Good job!", "success")
            yield put({ type: POST_SUBMIN_SUCCESS, data })
        } else {
            yield put({ type: POST_SUBMIN_ERROR, data })
        }
    } catch (e) {
        swal("Something Went Wrong","error!", "error")
        yield put({ type: POST_SUBMIN_ERROR, e })
    }
}

//deletesubadmin
export function* handleDeletesubadmin(action) {
    try {
        const res = yield call(Deletesubadmin, action)
        const data = res.data
        const status = res.status

        if (status === 200) {
            swal("Subadmin Successfully Deleted!", "Good job!", "success")
            yield put({ type: DELETE_SUBMIN_SUCCESS, data })
        } else {
            yield put({ type: DELETE_SUBMIN_ERROR, data })
        }
    } catch (e) {
        swal("Something Went Wrong","error!", "error")
        yield put({ type: DELETE_SUBMIN_ERROR, e })
    }
}