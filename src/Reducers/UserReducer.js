const userReducer = (state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
}, action) => {
    switch(action.type){
        case 'SET_LOGIN_PENDING':
            return {
                ...state,
                isLoginPending: action.type
            }
        case 'SET_LOGIN_SUCCESS':
            return {
                ...state,
                isLoginSuccess: action.type
            }
        case 'SET_LOGIN_ERROR':
            return {
                ...state,
                isLoginError: action.type
            }
        default:
            return state;
    }
}