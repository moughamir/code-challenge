import * as constants from '../constants'

export default (state = {}, action) => {
    switch (action.type) {
        case constants.SIGNUP_ACTION_SUCCESS:
            return {
                result: action.data
            }
            
        case constants.SIGNUP_ACTION_FAILED:
            return {
                error: 'failure message'
            }
        case constants.SIGNOUT_ACTION_SUCCESS:
            return {
                result: action.data
            }
        default:
            return state
    }
}