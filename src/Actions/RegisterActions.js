export const register = (email, password, firstName, lastName) => {
    return (dispatch) => {
        dispatch({ type: 'SET_REGISTER_PENDING', status: true})
        dispatch({ type: 'SET_REGISTER_SUCCESS', status: false})
        dispatch({ type: 'SET_REGISTER_ERROR', status: null})

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
                // dispatch({ type: 'SET_REGISTER_PENDING', status: false})
                // dispatch({ type: 'SET_REGISTER_SUCCESS', status: true})
                // dispatch({ type: 'SET_REGISTER_ERROR', status: false})
                console.log(resp.status)
                return resp.json() 
        })
        .then(resp => console.log(resp))
    //     .catch(error => {
    //         dispatch({ type: 'SET_REGISTER_SUCCESS', status: false})
    //         dispatch({ type: 'SET_REGISTER_ERROR', status: true})
    //         console.log(error.message)
    //     })
    }
}