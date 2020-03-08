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
                email: action.payload.email,
                authentication_token: action.payload.authentication_token,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name
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