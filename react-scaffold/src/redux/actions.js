import {
    test
} from '../api/index.js'


import { 
    TEST_ACTION
 } from "./action-types";


export const login = () => {

    return async dispatch => {

        // const response = await test(user)
        // const result = {}
        if (true) {
            dispatch({
                type:TEST_ACTION,
                data:{"test":1}
            })
        } else {

        }
    }
}
