export const register = (email, password, firstName, lastName) => {
    return (dispatch) => {
        dispatch({ type: 'SET_REGISTER_PENDING', status: true})
        dispatch({ type: 'SET_REGISTER_SUCCESS', status: false})
        dispatch({ type: 'SET_REGISTER_ERROR', status: null})
        dispatch({ type: 'SET_LOGIN_PENDING', status: true})
        dispatch({ type: 'SET_LOGIN_SUCCESS', status: false})
        dispatch({ type: 'SET_LOGIN_ERROR', status: null})

        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                password_confirmation: password,
                first_name: firstName,
                last_name: lastName
            })
        })
        .then(resp => {
                dispatch({ type: 'SET_REGISTER_PENDING', status: false})
                dispatch({ type: 'SET_REGISTER_SUCCESS', status: true})
                dispatch({ type: 'SET_REGISTER_ERROR', status: false})
                console.log(resp.status)
                dispatch({ type: 'SET_LOGIN_PENDING', status: false})
                dispatch({ type: 'SET_LOGIN_SUCCESS', status: true})
                dispatch({ type: 'SET_LOGIN_ERROR', status: false})
                return resp.json() 
        })
        .then(resp =>{
            dispatch({ type: 'CREATE_SESSION', payload: {
                email: resp.email,
                authentication_token: resp.authentication_token,
                first_name: resp.first_name,
                last_name: resp.last_name
            }})

        })
        .catch(error => {
            dispatch({ type: 'SET_REGISTER_SUCCESS', status: false})
            dispatch({ type: 'SET_REGISTER_ERROR', status: true})
            dispatch({ type: 'SET_LOGIN_SUCCESS', status: false})
            dispatch({ type: 'SET_LOGIN_ERROR', status: true})
            console.log(error.message)
        })
    }
}

export const deleteUser = (userEmail, userKey) => {
    return(dispatch) => {
        dispatch({ type: 'SET_LOGOUT_PENDING', status: true})
        dispatch({ type: 'SET_LOGOUT_SUCCESS', status: false})
        dispatch({ type: 'SET_LOGOUT_ERROR', status: null})
        fetch(`http://localhost:3001/users/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: userEmail,
                userToken: userKey
            })
        })
        .then(resp => {
            if(resp.status === 200){
                dispatch({ type: 'DELETE_SESSION'})
                dispatch({ type: 'SET_LOGOUT_PENDING', status: false})
                dispatch({ type: 'SET_LOGOUT_SUCCESS', status: true})
                dispatch({ type: 'SET_LOGOUT_ERROR', status: false})
                return resp.json() 
            }
        })
        .then(resp => console.log(resp))
        .catch(error => {
            dispatch({ type: 'SET_LOGOUT_SUCCESS', status: false})
            dispatch({ type: 'SET_LOGOUT_ERROR', status: true})
            console.log(error.message)
        })
    }
}