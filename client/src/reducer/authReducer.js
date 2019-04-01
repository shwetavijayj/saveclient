import { TEST_DISPATCH } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {},
    xyz: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TEST_DISPATCH:
            console.log("In reducer");
            let abc = action.payload;
            abc.username = 'aaaaaaaaaaaaa';
            return {
                ...state,
                user: abc
            }
        default:
            return state;
    }
}