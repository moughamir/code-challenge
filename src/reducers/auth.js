import * as constants from '../constants'

export default (state = {}, action) => {
    switch (action.type) {
        case constants.SIGNUP_ACTION:
            return {
                result: action.payload
            }
        default:
            return state
    }
}