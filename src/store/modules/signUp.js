import { handleActions } from 'redux-actions';
import { getIfEmailExistAPI, getIfNickExistAPI, postSignUpAPI } from 'lib/api'; 

//액션 타입
const GET_EMAIL_EXIST = 'GET_EMAIL_EXIST';
const GET_EMAIL_EXIST_LOADING = 'GET_EMAIL_EXIST_LOADING';
const GET_EMAIL_EXIST_SUCCESS = 'GET_EMAIL_EXIST_SUCCESS';
const GET_EMAIL_EXIST_ERROR = 'GET_EMAIL_EXIST_ERROR';

const GET_NICK_EXIST = 'GET_NICK_EXIST';
const GET_NICK_EXIST_LOADING = 'GET_NICK_EXIST_LOADING';
const GET_NICK_EXIST_SUCCESS = 'GET_NICK_EXIST_SUCCESS';
const GET_NICK_EXIST_ERROR = 'GET_NICK_EXIST_ERROR';

const POST_SIGNUP = 'POST_SIGNUP';
const POST_SIGNUP_LOADING = 'POST_SIGNUP_LOADING';
const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
const POST_SIGNUP_ERROR = 'POST_SIGNUP_ERROR';

//action creators

export const getIfEmailExist = (email) => ({
    type: GET_EMAIL_EXIST,
    payload: getIfEmailExistAPI(email)
})

export const getIfNickExist = (nick) => ({
    type: GET_NICK_EXIST,
    payload: getIfNickExistAPI(nick)
})

export const postSignUp = (data) => ({
    type: POST_SIGNUP,
    payload: postSignUpAPI(data)
})


//상태 값 초기화
const initialState = {
    loading: false,
    error: false,
    data: {
        emailExist: '',
        nickExist: ''
    }
}

export default handleActions({
    [GET_EMAIL_EXIST_LOADING]: (state, action) => {
        return{
            ...state,
            loading: true,
            error: false,
        }
    },
    [GET_EMAIL_EXIST_SUCCESS]: (state, action) => {
        const { nickEixst } = state.data; 
        const { emailExist } = action.payload.data;
        return {
            ...state,
            loading: false,
            data: {
                emailExist,
                nickEixst
            }
        }
    },
    [GET_EMAIL_EXIST_ERROR]: (state, action) => {
        return{
            ...state,
            loading: false,
            error: true
        }
    },
    [GET_NICK_EXIST_LOADING]: (state, action) => {
        return{
            ...state,
            loading: true,
            error: false,
        }
    },
    [GET_NICK_EXIST_SUCCESS]: (state, action) => {
        const { emailExist } = state.data; 
        const { nickExist } = action.payload.data;
        return {
            ...state,
            loading: false,
            data: {
                emailExist,
                nickExist
            }
        }
    },
    [GET_NICK_EXIST_ERROR]: (state, action) => {
        return{
            ...state,
            loading: false,
            error: true
        }
    },
    [POST_SIGNUP_LOADING] : (state, action) => {
        return{
            ...state,
            loading: true,
            error: false,
        }
    },
    [POST_SIGNUP_SUCCESS]: (state, action) => {
        return initialState
    },
    [POST_SIGNUP_ERROR]: (state, action) => {
        return{
            ...state,
            loading: false,
            error: true
        }
    }
}, initialState);