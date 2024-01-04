import { takeLatest } from "redux-saga/effects"
import { DELETE_STUDENT_PROGRESS, GET_STUDENT_LIST_PROGRESS, POST_STUDENT_PROGRESS } from "../../student/action/action"
import { handleDeletestudent, handleGetstudent, handlePoststudent } from "../managestudent/managestudent"

export function* getStudentsaga() {
    yield takeLatest(GET_STUDENT_LIST_PROGRESS, handleGetstudent)
}

export function* postStudentsaga() {
    yield takeLatest(POST_STUDENT_PROGRESS, handlePoststudent)
}

export function* deleteStudentsaga() {
    yield takeLatest(DELETE_STUDENT_PROGRESS, handleDeletestudent)
}