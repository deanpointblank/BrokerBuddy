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
            console.log(resp)

        })
        .catch(error => {
            console.log(error.message)
        })
    }
}