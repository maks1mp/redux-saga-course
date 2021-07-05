import {LOAD_USERS, LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS} from './actions';

const initialPeopleState = {
    page: 1,
    search: '',
    loading: false,
    error: null,
    data: null,
}

export default function peopleReducer(state = initialPeopleState, action) {
    switch (action.type) {
        case LOAD_USERS: {
            const {page, search} = action.payload;

            return {
                ...state,
                loading: true,
                page,
                search,
            };
        }

        case LOAD_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }

        case LOAD_USERS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }

        default:
            return state;
    }
}