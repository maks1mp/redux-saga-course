import {LOAD_USER_DETAILS, LOAD_USER_DETAILS_FAILURE, LOAD_USER_DETAILS_SUCCESS} from "./actions";

const initialDetailsState = {
    data: null,
    error: null,
    loading: false,
}

export default function userDetailsReducer(state = initialDetailsState, action) {
    switch (action.type) {
        case LOAD_USER_DETAILS: {
            return {
                ...state,
                loading: true,
            }
        }

        case LOAD_USER_DETAILS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            }
        }

        case LOAD_USER_DETAILS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }

        default:
            return state;
    }
}