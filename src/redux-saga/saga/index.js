import { all } from "redux-saga/effects"
import { deleteSubadminsaga, getSubadminsaga, postSubadminsaga } from "./root/rootsubadmin"
import { deleteFacultysaga, getFacultysaga, postFacultysaga, updateFacultysaga } from "./root/rootfaculty"
import { deleteStudentsaga, getStudentsaga, postStudentsaga } from "./root/rootstudent"

export function* rootSaga() {
    yield all([
        //get subadmin
        getSubadminsaga(),

        // post subadmin
        postSubadminsaga(),
        deleteSubadminsaga(),

        // faculty
        getFacultysaga(),
        postFacultysaga(),
        deleteFacultysaga(),
        updateFacultysaga(),

        // student
        getStudentsaga(),
        postStudentsaga(),
        deleteStudentsaga()
    ])
}