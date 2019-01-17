import {combineReducers} from 'redux'
import { 
    TEST_ACTION
 } from "./action-types";




function test(state={},action) {
    switch (action.type) {
        case TEST_ACTION:
            return {"test":1}
        default:
            return state
    }
    
}

export default combineReducers({
    test
})