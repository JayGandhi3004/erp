import { takeLatest } from "redux-saga/effects"
import { DELETE_SUBMIN_PROGRESS, GET_SUBMIN_LIST_PROGRESS, POST_SUBMIN_PROGRESS } from "../../subadmin/action/action"
import { handleDeletesubadmin, handleGetsubadmin, handlePostsubadmin } from "../managesubadmin/managesubadmin"

export function* getSubadminsaga() {
    yield takeLatest(GET_SUBMIN_LIST_PROGRESS, handleGetsubadmin)
}

export function* postSubadminsaga() {
    yield takeLatest(POST_SUBMIN_PROGRESS, handlePostsubadmin)
}

export function* deleteSubadminsaga() {
    yield takeLatest(DELETE_SUBMIN_PROGRESS, handleDeletesubadmin)
}