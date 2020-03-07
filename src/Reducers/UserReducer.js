const userReducer = (state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
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
        default:
            return state;
    }
}