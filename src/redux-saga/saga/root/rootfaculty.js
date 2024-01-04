import { takeLatest } from "redux-saga/effects"
import { DELETE_FACULTY_PROGRESS, GET_FACULTY_LIST_PROGRESS, POST_FACULTY_PROGRESS, UPDATE_FACULTY_PROGRESS } from "../../faculty/action/action"
import { handleDeletefaculty, handleGetfaculty, handlePostfaculty, handleUpdatefaculty,  } from "../managefaculty/managefaculty"

export function* getFacultysaga() {
    yield takeLatest(GET_FACULTY_LIST_PROGRESS, handleGetfaculty)
}

export function* postFacultysaga() {
    yield takeLatest(POST_FACULTY_PROGRESS, handlePostfaculty)
}

export function* deleteFacultysaga() {
    yield takeLatest(DELETE_FACULTY_PROGRESS, handleDeletefaculty)
}

export function* updateFacultysaga() {
    yield takeLatest(UPDATE_FACULTY_PROGRESS, handleUpdatefaculty)
}