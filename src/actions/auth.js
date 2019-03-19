import * as constants from '../constants'

export const SignupAction = () => dispatch => {
    dispatch({
        type: constants.SIGNUP_ACTION,
        data: 'success'
    })
}