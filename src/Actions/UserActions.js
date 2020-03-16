export const login = (email, password) => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOGIN_PENDING', status: true})
        dispatch({ type: 'SET_LOGIN_SUCCESS', status: false})
        dispatch({ type: 'SET_LOGIN_ERROR', status: null})

        fetch('http://localhost:3001/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(resp => {
            if(resp.status === 201){
                dispatch({ type: 'SET_LOGIN_PENDING', status: false})
                dispatch({ type: 'SET_LOGIN_SUCCESS', status: true})
                dispatch({ type: 'SET_LOGIN_ERROR', status: false})
                return resp.json() 
            }
        })
        .then(resp => {
            dispatch({ type: 'CREATE_SESSION', payload: {
                email: resp.email,
                authentication_token: resp.authentication_token,
                first_name: resp.first_name,
                last_name: resp.last_name
            }})

        })
        .catch(error => {
            dispatch({ type: 'SET_LOGIN_SUCCESS', status: false})
            dispatch({ type: 'SET_LOGIN_ERROR', status: true})
            console.log(error.message)
        })
    }
}

export const logout = (userEmail, userKey) => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOGOUT_PENDING', status: true})
        dispatch({ type: 'SET_LOGOUT_SUCCESS', status: false})
        dispatch({ type: 'SET_LOGOUT_ERROR', status: null})

        fetch('http://localhost:3001/sessions/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-User-Email': userEmail,
                'X-User-Token': userKey
            }
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
            dispatch({ type: 'SET_LOGIN_SUCCESS', status: false})
            dispatch({ type: 'SET_LOGIN_ERROR', status: true})
            console.log(error.message)
        })
    }
}