export function signIn(credentials) {
    return (dispatch, getState) => {
        if (credentials && credentials.username === 'admin' && credentials.password === '123123') {
            dispatch({ type: 'LOGIN_SUCCESS' });
        } else {
            dispatch({ type: 'LOGIN_ERROR' });
        }
    }
};
export function signOut() {
    return (dispatch, getState) => {
        dispatch({ type: 'LOGOUT_SUCCESS' });
    }
}