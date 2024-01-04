import { DELETE_STUDENT_ERROR, DELETE_STUDENT_PROGRESS, DELETE_STUDENT_SUCCESS, GET_STUDENT_LIST_ERROR, GET_STUDENT_LIST_PROGRESS, GET_STUDENT_LIST_SUCCESS, POST_STUDENT_ERROR, POST_STUDENT_PROGRESS, POST_STUDENT_SUCCESS } from "../action/action"

const initialstate = {
    student: [],
    error: null,
    isLoading: false,
}

const studentReducer = (state = initialstate, action) => {
    switch (action.type) {
        //get subadmin
        case GET_STUDENT_LIST_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_STUDENT_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                student: action.data
            }
        }
        case GET_STUDENT_LIST_ERROR: {
            return {
                ...state,
                error: true
            }
        }

        //post subadmin
        case POST_STUDENT_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case POST_STUDENT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                student: state.student.concat(action.data)
            }
        }
        case POST_STUDENT_ERROR: {
            return {
                ...state,
                error: true
            }
        }

        //delete subadmin
        case DELETE_STUDENT_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case DELETE_STUDENT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                student: state.student.filter((e) => e._id !== action.data)
            }
        }
        case DELETE_STUDENT_ERROR: {
            return {
                ...state,
                error: true
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default studentReducer