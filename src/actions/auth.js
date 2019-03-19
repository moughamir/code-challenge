import * as constants from '../constants'

export const SignupAction = () => dispatch => {
    dispatch({
        type: constants.SIGNUP_ACTION_SUCCESS,
        data: 'success'
    })
}

export const SignoutAction = () => dispatch => {
    dispatch({
        type: constants.SIGNOUT_ACTION_SUCCESS,
        data: 'logout success'
    })
}