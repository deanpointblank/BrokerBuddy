const RegistrationStatusReducer = (state = {
    isRegisterSuccess: false,
    isRegisterPending: false,
    isRegisternError: null
}, action) => {
    switch(action.type){
        case 'SET_REGISTER_PENDING':
            return {
                ...state,
                isRegisterPending: action.status
            }
        case 'SET_REGISTER_SUCCESS':
            return {
                ...state,
                isRegisterSuccess: action.status
            }
        case 'SET_REGISTER_ERROR':
            return {
                ...state,
                isRegisterError: action.status
            }
        default:
            return state;
    }
}

export default RegistrationStatusReducer;