import { DELETE_FACULTY_ERROR, DELETE_FACULTY_PROGRESS, DELETE_FACULTY_SUCCESS, GET_FACULTY_LIST_ERROR, GET_FACULTY_LIST_PROGRESS, GET_FACULTY_LIST_SUCCESS, POST_FACULTY_ERROR, POST_FACULTY_PROGRESS, POST_FACULTY_SUCCESS, UPDATE_FACULTY_ERROR, UPDATE_FACULTY_PROGRESS, UPDATE_FACULTY_SUCCESS } from "../action/action"

const initialstate = {
    faculty: [],
    error: null,
    isLoading: false,
}

const facultyReducer = (state = initialstate, action) => {
    // console.log(action);
    switch (action.type) {
        //get faculty
        case GET_FACULTY_LIST_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_FACULTY_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                faculty: action.data
            }
        }
        case GET_FACULTY_LIST_ERROR: {
            return {
                ...state,
                error: true
            }
        }
        //post faculty
        case POST_FACULTY_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case POST_FACULTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                faculty: state.faculty.concat(action.data)
            }
        }
        case POST_FACULTY_ERROR: {
            return {
                ...state,
                error: true
            }
        }

        //delete faculty
        case DELETE_FACULTY_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case DELETE_FACULTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                faculty: state.faculty.filter((e) => e._id !== action.data)
            }
        }
        case DELETE_FACULTY_ERROR: {
            return {
                ...state,
                error: true
            }
        }

        //update
        case UPDATE_FACULTY_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UPDATE_FACULTY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                faculty: state.faculty.map((item) => {
                    if (item._id === action.data._id) {
                        return { ...item, ...action.data }
                    } else {
                        return item
                    }
                }),
                isLoading: true
            }
        }

        case UPDATE_FACULTY_ERROR: {
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

export default facultyReducer