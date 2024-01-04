import { DELETE_SUBMIN_ERROR, DELETE_SUBMIN_PROGRESS, DELETE_SUBMIN_SUCCESS, GET_SUBMIN_LIST_ERROR, GET_SUBMIN_LIST_PROGRESS, GET_SUBMIN_LIST_SUCCESS, POST_SUBMIN_ERROR, POST_SUBMIN_PROGRESS, POST_SUBMIN_SUCCESS } from "../action/action"

const initialstate = {
    subadmin: [],
    error: null,
    isLoading: false,
}

const subadminReducer = (state = initialstate, action) => {
    console.log(action);
    switch (action.type) {
        //get subadmin
        case GET_SUBMIN_LIST_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_SUBMIN_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                subadmin: action.data
            }
        }
        case GET_SUBMIN_LIST_ERROR: {
            return {
                ...state,
                error: true
            }
        }
        //post subadmin
        case POST_SUBMIN_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case POST_SUBMIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                subadmin: state.subadmin.concat(action.data)
            }
        }
        case POST_SUBMIN_ERROR: {
            return {
                ...state,
                error: true
            }
        }

        //delete subadmin
        case DELETE_SUBMIN_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case DELETE_SUBMIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                subadmin: state.subadmin.filter((e) => e._id !== action.data)
            }
        }
        case DELETE_SUBMIN_ERROR: {
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

export default subadminReducer