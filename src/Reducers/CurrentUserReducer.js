const CurrentUserReducer = (state = {
    email: '',
    authentication_token: '',
    first_name: '',
    last_name: '',
    logged_in: false
}, action) => {
    switch(action.type){
        case 'CREATE_SESSION':
            return {
                ...state,
                email: action.payload.email,
                authentication_token: action.payload.authentication_token,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                logged_in: true
            }
        case 'DELETE_SESSION':
            return {
                ...state,
                email: '',
                authentication_token: '',
                first_name: '',
                last_name: '',
                logged_in: false
            }
        default:
            return state;
    }
}

export default CurrentUserReducer;