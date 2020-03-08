const CurrentUserReducer = (state = {
    email: '',
    authentication_token: '',
    first_name: '',
    last_name: ''
}, action) => {
    switch(action.type){
        case 'CREATE_SESSION':
            return {
                ...state,
                email: action.email,
                authentication_token: action.token,
                first_name: action.first_name,
                last_name: action.last_name
            }
        case 'DELETE_SESSION':
            return {
                ...state,
                email: '',
                authentication_token: '',
                first_name: '',
                last_name: ''
            }
        default:
            return state;
    }
}

export default CurrentUserReducer;