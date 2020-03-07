export const login = (email, password) => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOGIN_PENDING', status: true})
        dispatch({ type: 'SET_LOGIN_SUCCESS', status: false})
        dispatch({ type: 'SET_LOGIN_ERROR', status: null})

        fetch('http://localhost:3001/sessions', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .catch(error => {
            console.log(error.message)
        })
    }
}