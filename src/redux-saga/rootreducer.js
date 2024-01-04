import { combineReducers } from "redux"
import subadminReducer from "./subadmin/reducer/reducer"
import facultyReducer from "./faculty/reducer/reducer"
import studentReducer from "./student/reducer/reducer"


const rootreducer = combineReducers({
    subadminReducer,
    facultyReducer,
    studentReducer
})


export default rootreducer