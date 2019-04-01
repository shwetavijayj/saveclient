import { TEST_DISPATCH } from './types';
// REGISTER USER
export const registerUser = (userData) => {
    console.log("In action");
    return {
        type: TEST_DISPATCH,
        payload: userData
    }
} 