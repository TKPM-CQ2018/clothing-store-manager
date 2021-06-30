const initState = {
    authError: null,
    logined: false
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login success.');
            return {
                ...state,
                authError: null,
                logined: true
            }
        case 'LOGIN_ERROR':
            console.log('Login error');
            return {
                ...state,
                authError: 'Login failed',
                logined: false
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return {
                ...state,
                logined: false
            }
        default:
            return state;
    }
}

export default authReducer;