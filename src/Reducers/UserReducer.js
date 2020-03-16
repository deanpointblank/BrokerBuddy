const userReducer = (state = {
    isLoginSuccess: false,
    isLoginPending: false,
    isLoginError: null,
    isLogoutPending: false,
    isLogoutSuccess: false,
    isLogoutError: null
}, action) => {
    switch(action.type){
        case 'SET_LOGIN_PENDING':
            return {
                ...state,
                isLoginPending: action.status
            }
        case 'SET_LOGIN_SUCCESS':
            return {
                ...state,
                isLoginSuccess: action.status
            }
        case 'SET_LOGIN_ERROR':
            return {
                ...state,
                isLoginError: action.status
            }
        case 'SET_LOGOUT_PENDING':
            return {
                ...state,
                isLogoutPending: action.status
            }
        case 'SET_LOGOUT_SUCCESS':
            return {
                ...state,
                isLogoutSuccess: action.status
            }
        case 'SET_LOGOUT_ERROR':
            return {
                ...state,
                isLogoutError: action.status
            }
        default:
            return state;
    }
}

export default userReducer;